import React, { useEffect, useRef } from "react";

const FamilyTreeDiagram = ({ treeData }) => {
  const canvasRef = useRef(null);

  const drawCircle = (ctx, color, radius) => {
    ctx.beginPath();
    ctx.arc(300, 300, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  };

  const renderTreeNodes = (
    node,
    ctx,
    tier = 1,
    startX = 200,
    startY = 300,
    angle = 0
  ) => {
    if (!node) return;

    const nodeRadius = 40; // Circle radius for each node
    const distance = 100; // Distance between concentric circles
    const xPos = startX + distance * Math.cos(angle);
    const yPos = startY + distance * Math.sin(angle);

    // Draw circle and name on the canvas
    ctx.beginPath();
    ctx.arc(xPos, yPos, nodeRadius, 0, Math.PI * 4);
    ctx.fillStyle =
      tier === 1
        ? "red"
        : tier === 2
        ? "yellow"
        : tier === 3
        ? "blue"
        : "green";
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.fillText(node.username, xPos - nodeRadius / 12, yPos);

    // Render child nodes recursively
    if (node.referrals && node.referrals.length > 0) {
      const childAngleOffset = -Math.PI / 3; // Offset for child nodes
      node.referrals.forEach((child, index) => {
        const newAngle = angle + childAngleOffset + index;
        renderTreeNodes(child, ctx, tier + 1, xPos, yPos, newAngle);
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw concentric circles
    drawCircle(ctx, "green", 250);
    drawCircle(ctx, "blue", 220);
    drawCircle(ctx, "yellow", 150);
    drawCircle(ctx, "red", 10);

    // Render the family tree starting from the root node
    if (treeData) {
      renderTreeNodes(treeData, ctx);
    }
  }, [treeData]);

  return (
    <div style={{ position: "relative", width: "600px", height: "600px" }}>
      <canvas ref={canvasRef} width="600" height="600"></canvas>
    </div>
  );
};

export default FamilyTreeDiagram;
