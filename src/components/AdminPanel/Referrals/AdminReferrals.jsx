import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./tree.css";
import { PopUp } from "./PopUp";
import { Dialog, DialogTrigger } from "../../ui/dialog";

const AdminReferrals = () => {
  const [referralTree, setReferralTree] = useState(null); // Full tree
  const [currentNode, setCurrentNode] = useState(null); // Currently displayed node

  useEffect(() => {
    const fetchReferralTree = async () => {
      const userId = sessionStorage.getItem("UserId");
      try {
        const response = await axios.get(
          `https://door2life-backend.vercel.app/api/auth/referrals/${userId}`
        );
        setReferralTree(response.data.referralTree);
        setCurrentNode(response.data.referralTree); // Start with the root node
      } catch (error) {
        console.error("Error fetching referral tree:", error);
      }
    };

    fetchReferralTree();
  }, []);

  // Function to render the tree recursively
  const renderTree = (node, tier = 1) => {
    if (!node) return null;

    return (
      <Dialog>
        <div
          onClick={(e) => {
            e.stopPropagation(); // Prevent parent nodes from being triggered
            setCurrentNode(node); // Set the clicked node as the current node
          }}
          className={`node-container tier-${tier}`}
        >
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
          ref={node.referrals}
        />
      </Dialog>
    );
  };

  return (
    <div className="relative min-h-screen text-white tree-container">
      <Link to={"/admin/dashboard"}>
        <h1 className="top-0 left-0 px-4 py-2 mx-auto bg-blue-600 rounded-lg md:absolute w-max md:mx-16 my-7">
          Go Back
        </h1>
      </Link>
      <div className="flex flex-col items-center justify-center w-full mx-16">
        <h2 className="mx-auto text-4xl text-white">Referral Tree</h2>
        {currentNode !== referralTree && (
          <button
            onClick={() => setCurrentNode(referralTree)} // Reset to the full tree
            className="px-4 py-2 mt-4 bg-blue-500 rounded-lg"
          >
            Show Full Tree
          </button>
        )}
      </div>
      {currentNode ? (
        <div className="root-node">{renderTree(currentNode)}</div>
      ) : (
        <p className="text-white animate-spin transform-origin text-7xl">.</p>
      )}
    </div>
  );
};

export default AdminReferrals;
