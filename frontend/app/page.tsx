import UserInterface from "@/components/userInterface";
import React from "react";

const Home = () => {
    return <main className="flex flex-wrap justify-center items-start min-h-screen bg-gray-100">
        <div className="m-4">
            <UserInterface backendName="go" />
        </div>
    </main>
}

export default Home