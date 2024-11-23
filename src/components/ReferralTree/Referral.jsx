import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./tree.css";
import { PopUp } from "../../UI/PopUp";
import { Dialog, DialogTrigger } from "../ui/dialog";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

import FamilyTreeDiagram from "./CircleRefferal";

const ReferralTree = () => {
  const { t, i18n } = useTranslation(); // Initialize translation
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

  // Recursive rendering logic with display limit
  const renderTree = (node, tier = 1, displayedCount = 0) => {
    if (!node || displayedCount >= 15)
      return { renderedNodes: null, displayedCount };

    displayedCount++;

    const referralsCount = 15;
    const isTier4With15Members = tier === 4 && referralsCount < 16;

    const { renderedNodes: childNodes, displayedCount: updatedCount } =
      node.referrals && node.referrals.length > 0
        ? node.referrals.reduce(
            (acc, child) => {
              if (acc.displayedCount >= 15) return acc;
              const childResult = renderTree(
                child,
                tier + 1,
                acc.displayedCount
              );
              return {
                renderedNodes: [
                  ...acc.renderedNodes,
                  childResult.renderedNodes,
                ],
                displayedCount: childResult.displayedCount,
              };
            },
            { renderedNodes: [], displayedCount }
          )
        : { renderedNodes: [], displayedCount };

    return {
      renderedNodes: (
        <>
          <Dialog>
            <div className={`node-container  tier-${tier}`}>
              {isTier4With15Members || referralsCount < 15 ? (
                <DialogTrigger>
                  <div className="node hover:scale-90">
                    <p className="username ">{node.username}</p>
                    <p className="text-[.8rem] email">{node.email}</p>
                  </div>
                </DialogTrigger>
              ) : (
                <div className="node ">
                  <p className="username">{node.username}</p>
                  <p className="text-[.8rem] email">{node.email}</p>
                </div>
              )}

              {childNodes.length > 0 && (
                <div className="flex-wrap referrals-container xl:flex-nowrap ">
                  {childNodes}
                </div>
              )}
            </div>

            {isTier4With15Members && (
              <PopUp
                username={node.username}
                email={node.email}
                id={node.userId}
                doorStatus={doorStatus}
              />
            )}
          </Dialog>
        </>
      ),
      displayedCount: updatedCount,
    };
  };

  const { renderedNodes } = referralTree
    ? renderTree(referralTree)
    : { renderedNodes: null };

  return (
    <>
      <Navbar />
      <div className="relative mt-16 text-white lg:mt-0 bg-gray tree-container">
        <div className="left-0 top-[12rem] grid grid-cols-2 mx-16 rounded-lg w-[14rem] h-[8rem] place-items-center text-gray bg-lightgray md:absolute xl:left-[60rem] xl:top-[4rem]  my-7">
          <div className="flex flex-col gap-[.50rem] px-2 test-gray">
            <p className="bg-[#59f2d9] w-4 h-4 rounded-full"></p>
            <p className="bg-[#17bea2] w-4 h-4 rounded-full"></p>
            <p className="bg-[#107766] w-4 h-4 rounded-full"></p>
            <p className="bg-[#154c42] w-4 h-4 rounded-full"></p>
          </div>
          <div className="px-2 -ml-16 test-gray">
            <h1>{t("Founder")}</h1>
            <h1>{t("1st Gen")}</h1>
            <h1>{t("2nd Gen")}</h1>
            <h1>{t("3rd Gen")}</h1>
          </div>
        </div>
        <Link to={"/userpage"}>
          <h1 className="left-0 px-4 py-2 mx-16 text-white bg-blue-600 rounded-lg md:absolute my-7">
            {t("Go Back")}
          </h1>
        </Link>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="mx-auto text-4xl text-white">{t("Referral Tree")}</h2>
          <h2 className="mx-auto mt-2 text-sm text-center text-lightgray">
            {t(
              "Complete your 3rd Generation & Send donations request By Clicking on it"
            )}
          </h2>
        </div>
        {referralTree ? (
          <>
            {" "}
            <div className="root-node">{renderedNodes}</div>
          </>
        ) : (
          <p className="text-white animate-spin transform-origin text-7xl">.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ReferralTree;
