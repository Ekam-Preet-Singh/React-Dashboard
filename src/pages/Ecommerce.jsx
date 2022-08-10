import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";

import { Button, LineChart, Pie, SparkLine, Stacked } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import {
  dropdownData,
  earningData,
  ecomPieChartData,
  medicalproBranding,
  recentTransactions,
  SparklineAreaData,
  weeklyStats,
} from "../data/dummy";
import product9 from "../data/product9.jpg";

const Ecommerce = () => {
  return (
    <div className="mt-24">
      <div className="lex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="lex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: "blue" }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
