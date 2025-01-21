"use client";
import React from "react";

export default function RefreshButton() {
    
    const HandleReload = () => {
        window.location.reload();
        // Once called forces the page to refresh
    };

    return (
        // Refresh button with custom styling
        <div className="flex justify-center p-4">
            <button className="border-2 rounded-lg p-4 border-[#A06CD5] ring ring-[#8E7DBE] text-[#419D78] font-bold" onClick={HandleReload}>Refresh Page</button>
        </div>
    );
};