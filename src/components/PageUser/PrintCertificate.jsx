import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '../ui/card';

const PrintCertificate = () => {
  return (
    <Card className="mx-auto my-8 p-6 max-w-md shadow-lg bg-lightgray flex flex-col items-center">
      <CardTitle className="text-xl sm:text-2xl font-bold text-center mb-2">Print Certificate</CardTitle>
      
      <CardDescription className="text-center text-black font-semibold mb-4">
        Print your "Opening Doors to Life" Membership Certificate
      </CardDescription>
      
      <CardContent className="text-center">
        <p className="font-semibold mb-4">Click on the button to print the certificate</p>
        <div className="flex justify-center">
          <Button className="bg-green hover:bg-darkGreen text-black text-xs sm:text-sm">Print</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrintCertificate;
