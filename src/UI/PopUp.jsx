import { useEffect, useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Button } from "../components/ui/button";

const doorValues = [
  { door: 1, donationAmount: 50, amountReceived: 400 },
  { door: 2, donationAmount: 200, amountReceived: 1600 },
  { door: 3, donationAmount: 600, amountReceived: 4800 },
  { door: 4, donationAmount: 1800, amountReceived: 14400 },
  { door: 5, donationAmount: 3000, amountReceived: 24000 },
  { door: 6, donationAmount: 4000, amountReceived: 32000 },
  { door: 7, donationAmount: 12000, amountReceived: 96000 },
  { door: 8, donationAmount: 50, amountReceived: 400 },
  { door: 9, donationAmount: 200, amountReceived: 1600 },
  { door: 10, donationAmount: 600, amountReceived: 4800 },
  { door: 11, donationAmount: 1800, amountReceived: 14400 },
  { door: 12, donationAmount: 3000, amountReceived: 24000 },
  { door: 13, donationAmount: 4000, amountReceived: 32000 },
  { door: 14, donationAmount: 12000, amountReceived: 96000 },
];

export function PopUp({ username, email, id, doorStatus }) {
  const [amount, setAmount] = useState(0);

  const calculateDonationAmount = () => {
    const unlockedDoors = Object.entries(doorStatus)
      .filter(([_, status]) => status) // Filter doors that are unlocked (true)
      .map(([door]) => parseInt(door, 10)); // Convert door keys to integers

    const highestUnlocked = Math.max(...unlockedDoors, 1); // Default to door 1
    const doorValue = doorValues.find((d) => d.door === highestUnlocked);

    return doorValue?.donationAmount || 0;
  };

  useEffect(() => {
    setAmount(calculateDonationAmount());
  }, [doorStatus]);

  const handleSend = async () => {
    const reqId = sessionStorage.getItem("UserId");
    const data = {
      requesterId: reqId,
      recipientId: id,
      amount,
    };
    try {
      await axios.post(
        "https://door2life-backend.vercel.app/api/messages/payment-requests",
        data
      );

      toast.success("Donation Sent Successfully", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px] bg-lightgray text-gray border-gray">
      <DialogHeader>
        <DialogTitle>{username}</DialogTitle>
        <DialogDescription>{email}</DialogDescription>
        <Label htmlFor="Amount">Your Amount</Label>

        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled
        />
      </DialogHeader>

      <DialogFooter>
        <div onClick={handleSend}>
          <Button type="submit">Send Donation Request</Button>
        </div>
      </DialogFooter>
      <ToastContainer />
    </DialogContent>
  );
}