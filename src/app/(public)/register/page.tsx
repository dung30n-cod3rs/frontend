"use client";
import { RegisterCompanyForm } from "@/components/register-company-form";
import { RegisterForm } from "@/components/register-form";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();
  const [userFormData, setUserFormData] = React.useState(null);
  const [companyFormData, setCompanyFormData] = React.useState(null);

  async function fetchUserData(data: any) {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.password,
        repeatPassword: data.confirmPassword,
      }),
    });
    if (response.ok) {
      console.log("Ok");
    } else {
      // Handle errors
      console.log("not ok");
    }
  }

  async function fetchCompanyData(data: any) {
    const response = await fetch(
      "http://localhost:3000/api/auth/register/company",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.companyName }),
      },
    );
    if (response.ok) {
      console.log("Ok");
    } else {
      // Handle errors
      console.log("not ok");
    }
  }

  React.useEffect(() => {
    console.log(userFormData, companyFormData);

    if (userFormData && companyFormData) {
      fetchUserData(userFormData).then(() => {
        fetchCompanyData(companyFormData);
      });
      router.push("/profile");
    }
  }, [router, userFormData, companyFormData]);

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      {!userFormData ? (
        <RegisterForm setUserFormData={setUserFormData} />
      ) : (
        <RegisterCompanyForm setCompanyFormData={setCompanyFormData} />
      )}
    </div>
  );
}
