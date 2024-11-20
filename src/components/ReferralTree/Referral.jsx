import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./tree.css";
import { PopUp } from "../../UI/PopUp";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const ReferralTree = () => {
  const [referralTree, setReferralTree] = useState(null);
  const [doorStatus, setDoorStatus] = useState({});

  useEffect(() => {
    const fetchReferralTree = async () => {
      const userId = sessionStorage.getItem("UserId");
      try {
        const [treeResponse, doorResponse] = await Promise.all([
          axios.get(
            `https://door2life-backend.vercel.app/api/auth/referrals/${userId}`
          ),
          axios.get(
            `https://door2life-backend.vercel.app/api/user/door-status/${userId}`
          ), // Fetch door status API
        ]);

        setReferralTree(treeResponse.data.referralTree);
        setDoorStatus(doorResponse.data.doorStatus); // Update door status state
      } catch (error) {
        console.error("Error fetching referral tree or door status:", error);
      }
    };

    fetchReferralTree();
  }, []);

  const renderTree = (node, tier = 1) => {
    if (!node) return null;

    return (
      <>
        <Dialog>
          <div className={`node-container tier-${tier}`}>
            <DialogTrigger>
              <div className="node">
                <p className="username">{node.username}</p>
                <p className="text-[.8rem] email">{node.email}</p>
              </div>
            </DialogTrigger>
            {node.referrals && node.referrals.length > 0 && (
              <div className="flex-wrap referrals-container xl:flex-nowrap">
                {node.referrals.map((child) => (
                  <div key={child.userId} className="child-referral">
                    {renderTree(child, tier + 1)}
                  </div>
                ))}
              </div>
            )}
          </div>

          <PopUp
            username={node.username}
            email={node.email}
            id={node.userId}
            doorStatus={doorStatus}
          />
        </Dialog>
      </>
    );
  };

  return (
    <div className="relative text-white tree-container">
      <Link to={"/userpage"}>
        <h1 className="absolute left-0 px-4 py-2 mx-16 text-white bg-blue-600 rounded-lg my-7">
          Go Back
        </h1>
      </Link>
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="mx-auto text-4xl text-white">Referral Tree</h2>
        <h2 className="mx-auto text-sm text-lightgray">
          Send donations request to your 3rd Generaion
        </h2>
      </div>
      {referralTree ? (
        <div className="root-node">{renderTree(referralTree)}</div>
      ) : (
        <p className="text-white animate-spin transform-origin text-7xl">.</p>
      )}
    </div>
  );
};

export default ReferralTree;
