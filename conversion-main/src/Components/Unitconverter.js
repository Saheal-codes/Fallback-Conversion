import React, { useEffect, useState, useCallback } from "react";

export default function Unitconverter() {
  const [unit, setunit] = useState("angle");
  const [list, setlist] = useState([]);
  const [form, setform] = useState({
    Quantity: "",
    From: "",
    To: "",
    Result: "",
  });

  const angle = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="Radian">Radian</option>
      <option value="Mil">Mil</option>
      <option value="Grad">Grad</option>
      <option value="Degree">Degree</option>
    </select>
  );

  const area = (key) => (
    <select
      name={key}
      className=" rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="Square Millimeters">Square Millimeters</option>
      <option value="Square Centimeters">Square Centimeters</option>
      <option value="Square Meters">Square Meters</option>
      <option value="Hectares">Hectares</option>
      <option value="Square Kilometers">Square Kilometers</option>
      <option value="Square Inches">Square Inches</option>
      <option value="Square Feet">Square Feet</option>
      <option value="Square Yards">Square Yards</option>
      <option value="Acres">Acres</option>
      <option value="Square Miles">Square Miles</option>
    </select>
  );

  const currency = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="AUD">Australian Dollar (AUD)</option>
      <option value="BGN">Bulgarian Lev (BGN)</option>
      <option value="BRL">Brazilian Real (BRL)</option>
      <option value="CAD">Canadian Dollar (CAD)</option>
      <option value="CHF">Swiss Franc (CHF)</option>
      <option value="CNY">Chinese Yuan Renminbi (CNY)</option>
      <option value="CZK">Czech Koruna (CZK)</option>
      <option value="DKK">Danish Krone (DKK)</option>
      <option value="EUR">Euro (EUR)</option>
      <option value="GBP">British Pound (GBP)</option>
      <option value="HKD">Hong Kong Dollar (HKD)</option>
      <option value="HRK">Croatian Kuna (HRK)</option>
      <option value="HUF">Hungarian Forint (HUF)</option>
      <option value="IDR">Indonesian Rupiah (IDR)</option>
      <option value="ILS">Israeli Shekel (ILS)</option>
      <option value="INR">Indian Rupee (INR)</option>
      <option value="ISK">Icelandic Krona (ISK)</option>
      <option value="JPY">Japanese Yen (JPY)</option>
      <option value="KRW">South Korean Won (KRW)</option>
      <option value="MXN">Mexican Peso (MXN)</option>
      <option value="MYR">Malaysian Ringgit (MYR)</option>
      <option value="NOK">Norwegian Krone (NOK)</option>
      <option value="NZD">New Zealand Dollar (NZD)</option>
      <option value="PHP">Philippine Peso (PHP)</option>
      <option value="PLN">Polish Zloty (PLN)</option>
      <option value="RON">Romanian Leu (RON)</option>
      <option value="RUB">Russian Ruble (RUB)</option>
      <option value="SEK">Swedish Krona (SEK)</option>
      <option value="SGD">Singapore Dollar (SGD)</option>
      <option value="THB">Thai Baht (THB)</option>
      <option value="TRY">Turkish Lira (TRY)</option>
      <option value="USD">US Dollar (USD)</option>
      <option value="ZAR">South African Rand (ZAR)</option>
      <option value="ARS">Argentine Peso (ARS)</option>
      <option value="CLP">Chilean Peso (CLP)</option>
      <option value="COP">Colombian Peso (COP)</option>
      <option value="EGP">Egyptian Pound (EGP)</option>
      <option value="GHS">Ghanaian Cedi (GHS)</option>
      <option value="IDR">Indonesian Rupiah (IDR)</option>
      <option value="KES">Kenyan Shilling (KES)</option>
      <option value="LBP">Lebanese Pound (LBP)</option>
      <option value="MAD">Moroccan Dirham (MAD)</option>
      <option value="NPR">Nepalese Rupee (NPR)</option>
      <option value="PEN">Peruvian Sol (PEN)</option>
      <option value="PKR">Pakistani Rupee (PKR)</option>
      <option value="QAR">Qatari Riyal (QAR)</option>
      <option value="SAR">Saudi Arabian Riyal (SAR)</option>
      <option value="TWD">Taiwan New Dollar (TWD)</option>
      <option value="TZS">Tanzanian Shilling (TZS)</option>
      <option value="UAH">Ukrainian Hryvnia (UAH)</option>
      <option value="UGX">Ugandan Shilling (UGX)</option>
      <option value="VND">Vietnamese Dong (VND)</option>
      <option value="ZMW">Zambian Kwacha (ZMW)</option>
    </select>
  );

  const energy = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="Electronvolt">Electronvolts</option>
      <option value="Horsepowerhour">Horsepowerhour</option>
      <option value="Megawatthour">Megawatthour</option>
      <option value="Newtonmeter">Newton Meter</option>
      <option value="Watthour">Watthour</option>
      <option value="Joules">Joules</option>
      <option value="Kilojoules">Kilojoules</option>
      <option value="Footpounds">Foot-Pounds</option>
    </select>
  );

  const length = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="Nanometers">Nanometers</option>
      <option value="Microns">Microns</option>
      <option value="Millimeters">Millimeters</option>
      <option value="Centimeters">Centimeters</option>
      <option value="Meters">Meters</option>
      <option value="Kilometers">Kilometers</option>
      <option value="Inches">Inches</option>
      <option value="Feet">Feet</option>
      <option value="Yards">Yards</option>
      <option value="Miles">Miles</option>
      <option value="Nautical Miles">Nautical Miles</option>
    </select>
  );

  const speed = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="Centimeters per second">Centimeters per second</option>
      <option value="Meters per second">Meters per second</option>
      <option value="Kilometers per hour">Kilometers per hour</option>
      <option value="Miles per hour">Miles per hour</option>
      <option value="Feet per second">Feet per second</option>
      <option value="Knots">Knots</option>
      <option value="Mach">Mach</option>
    </select>
  );

  const temp = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="Celsius">Celsius</option>
      <option value="Fahrenheit">Fahrenheit</option>
      <option value="Kelvin">Kelvin</option>
    </select>
  );

  const volume = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="Millilitres">Millilitres</option>
      <option value="Cubic Centimetres">Cubic Centimetres</option>
      <option value="Litres">Litres</option>
      <option value="Cubic Metres">Cubic Metres</option>
      <option value="Gallons(UK)">Gallons(UK)</option>
      <option value="Cubic Inches">Cubic Inches</option>
      <option value="Cubic Feet">Cubic Feet</option>
      <option value="Cubic Yards">Cubic Yards</option>
      <option value="Gallons(US)">Gallons(US)</option>
    </select>
  );

  const weight = (key) => (
    <select
      name={key}
      className="rounded-3xl pl-10 w-72  py-4"
      onChange={inputHandler}
      value={form[key]}
    >
      <option value="Carats">Carats</option>
      <option value="Milligrams">Milligrams</option>
      <option value="Centigrams">Centigrams</option>
      <option value="Decigrams">Decigrams</option>
      <option value="Hectograms">Hectograms</option>
      <option value="Kilograms">Kilograms</option>
      <option value="Metric Tonnes">Metric Tonnes</option>
      <option value="Ounces">Ounces</option>
      <option value="Pounds">Pounds</option>
      <option value="Stone">Stone</option>
    </select>
  );

  const alert = (
    <div className="rounded-md bg-yellow-50 p-4 w-6 h-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Please Fill The Input!
          </h3>
        </div>
      </div>
    </div>
  );

  const keymap = {
    angle,
    area,
    length,
    temperature: temp,
    volume,
    weightandmass: weight,
    currency,
    energy,
    speed,
  };

  const results = [];

  useEffect(() => {
    switch (unit) {
      case "angle":
        setform((prev) => {
          return { ...prev, From: "Radian", To: "Degree" };
        });
        break;
      case "area":
        setform((prev) => {
          return {
            ...prev,
            From: "Hectare",
            To: "Acres",
          };
        });
        break;
      case "length":
        setform((prev) => {
          return { ...prev, From: "Kilometers", To: "Nautical Miles" };
        });
        break;
      case "temperature":
        setform((prev) => {
          return { ...prev, From: "Celsius", To: "Fahrenheit" };
        });
        break;
      case "volume":
        setform((prev) => {
          return { ...prev, From: "Gallons(UK)", To: "Litres" };
        });
        break;
      case "weightandmass":
        setform((prev) => {
          return { ...prev, From: "Kilograms", To: "Pounds" };
        });
        break;
      case "currency":
        setform((prev) => {
          return { ...prev, From: "EUR", To: "INR" };
        });
        break;
      case "energy":
        setform((prev) => {
          return { ...prev, From: "Kilojoules", To: "Footpounds" };
        });
        break;
      case "speed":
        setform((prev) => {
          return { ...prev, From: "Miles per hour", To: "Kilometers per hour" };
        });
        break;
    }
  }, [unit]);

  const resulthandler = useCallback(() => {
    // common conversion

    if (form.From === "Kilograms" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 2.20462 };
      });
    } else if (form.From === "Pounds" && form.To === "Kilograms") {
      console.log({ form });
      setform((prevform) => {
        console.log({ prevform });
        return { ...prevform, Result: prevform.Quantity * 0.45359237 };
      });
    }

    // Weight

    // carats
    else if (form.From === "Carats" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 200 };
      });
    } else if (form.From === "Milligrams" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.005 };
      });
    } else if (form.From === "Carats" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 20 };
      });
    } else if (form.From === "Centigrams" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.05 };
      });
    } else if (form.From === "Carats" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 2 };
      });
    } else if (form.From === "Decigrams" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.5 };
      });
    } else if (form.From === "Carats" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.002 };
      });
    } else if (form.From === "Hectograms" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 500 };
      });
    } else if (form.From === "Carats" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0002 };
      });
    } else if (form.From === "Kilograms" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 5000 };
      });
    } else if (form.From === "Carats" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0000002 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 5000000 };
      });
    } else if (form.From === "Carats" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.007055 };
      });
    } else if (form.From === "Ounces" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 141.7475 };
      });
    } else if (form.From === "Carats" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000441 };
      });
    } else if (form.From === "Pounds" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 2267.962 };
      });
    } else if (form.From === "Carats" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000031 };
      });
    } else if (form.From === "Stone" && form.To === "Carats") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 31751.47 };
      });
    }
    // milligrams
    else if (form.From === "Milligrams" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.1 };
      });
    } else if (form.From === "Centigrams" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10 };
      });
    } else if (form.From === "Milligrams" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.01 };
      });
    } else if (form.From === "Decigrams" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 100 };
      });
    } else if (form.From === "Milligrams" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00001 };
      });
    } else if (form.From === "Hectograms" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 100000 };
      });
    } else if (form.From === "Milligrams" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000001 };
      });
    } else if (form.From === "Kilograms" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1000000 };
      });
    } else if (form.From === "Milligrams" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000000001 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1000000000 };
      });
    } else if (form.From === "Milligrams" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000035 };
      });
    } else if (form.From === "Ounces" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 28349.52 };
      });
    } else if (form.From === "Milligrams" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000002 };
      });
    } else if (form.From === "Pounds" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 453592.4 };
      });
    } else if (form.From === "Milligrams" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000000157473044 };
      });
    } else if (form.From === "Stone" && form.To === "Milligrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 6350293 };
      });
    }
    //centigrams
    else if (form.From === "Centigrams" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.1 };
      });
    } else if (form.From === "Decigrams" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10 };
      });
    } else if (form.From === "Centigrams" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0001 };
      });
    } else if (form.From === "Hectograms" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10000 };
      });
    } else if (form.From === "Centigrams" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00001 };
      });
    } else if (form.From === "Kilograms" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 100000 };
      });
    } else if (form.From === "Centigrams" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00000001 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 100000000 };
      });
    } else if (form.From === "Centigrams" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000353 };
      });
    } else if (form.From === "Ounces" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 2834.952 };
      });
    } else if (form.From === "Centigrams" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000022 };
      });
    } else if (form.From === "Pounds" && form.To === "Centigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 45359.24 };
      });
    } else if (form.From === "Centigrams" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000002 };
      });
    }
    // decigrams
    else if (form.From === "Decigrams" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.001 };
      });
    } else if (form.From === "Hectograms" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1000 };
      });
    } else if (form.From === "Decigrams" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0001 };
      });
    } else if (form.From === "Kilograms" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10000 };
      });
    } else if (form.From === "Decigrams" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0000001 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10000000 };
      });
    } else if (form.From === "Decigrams" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.003527 };
      });
    } else if (form.From === "Ounces" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 283.4952 };
      });
    } else if (form.From === "Decigrams" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00022 };
      });
    } else if (form.From === "Pounds" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 4535.924 };
      });
    } else if (form.From === "Decigrams" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000016 };
      });
    } else if (form.From === "Stone" && form.To === "Decigrams") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 63502.93 };
      });
    }

    // hectograms
    else if (form.From === "Hectograms" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.1 };
      });
    } else if (form.From === "Kilograms" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10 };
      });
    } else if (form.From === "Hectograms" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0001 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10000 };
      });
    } else if (form.From === "Hectograms" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 3.527396 };
      });
    } else if (form.From === "Ounces" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.283495 };
      });
    } else if (form.From === "Hectograms" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.220462 };
      });
    } else if (form.From === "Pounds" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 4.535924 };
      });
    } else if (form.From === "Hectograms" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.015747 };
      });
    } else if (form.From === "Stone" && form.To === "Hectograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 63.50293 };
      });
    }

    // Kilograms
    else if (form.From === "Kilograms" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.001 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1000 };
      });
    } else if (form.From === "Kilograms" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 35.27396 };
      });
    } else if (form.From === "Ounces" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.02835 };
      });
    } else if (form.From === "Kilograms" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.157473 };
      });
    } else if (form.From === "Stone" && form.To === "Kilograms") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 6.350293 };
      });
    }

    // metrictonnes
    else if (form.From === "Metric Tonnes" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 35273.96 };
      });
    } else if (form.From === "Ounces" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000028 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 2204.623 };
      });
    } else if (form.From === "Pounds" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000454 };
      });
    } else if (form.From === "Metric Tonnes" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 157.473 };
      });
    } else if (form.From === "Stone" && form.To === "Metric Tonnes") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00635 };
      });
    }

    // Ounce
    else if (form.From === "Ounces" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0625 };
      });
    } else if (form.From === "Pounds" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 16 };
      });
    } else if (form.From === "Ounces" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.004464 };
      });
    } else if (form.From === "Stone" && form.To === "Ounces") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 224 };
      });
    }
    // Pounds
    else if (form.From === "Pounds" && form.To === "Stone") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.071429 };
      });
    } else if (form.From === "Stone" && form.To === "Pounds") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 14 };
      });
    }

    // Angle - Radian
    else if (form.From === "Radian" && form.To === "Mil") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1018.591 };
      });
    } else if (form.From === "Mil" && form.To === "Radian") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000981747 };
      });
    } else if (form.From === "Radian" && form.To === "Grad") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 63.6619 };
      });
    } else if (form.From === "Grad" && form.To === "Radian") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.015707 };
      });
    } else if (form.From === "Radian" && form.To === "Degree") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 57.29577 };
      });
    } else if (form.From === "Degree" && form.To === "Radian") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.01745 };
      });
    } else if (form.From === "Mil" && form.To === "Grad") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0625 };
      });
    } else if (form.From === "Grad" && form.To === "Mil") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 16 };
      });
    } else if (form.From === "Mil" && form.To === "Degree") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.05625 };
      });
    } else if (form.From === "Degree" && form.To === "Mil") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 17.7777 };
      });
    } else if (form.From === "Grad" && form.To === "Degree") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.9 };
      });
    } else if (form.From === "Degree" && form.To === "Grad") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1.1111 };
      });
    }

    // Area

    // Square Millimeters
    else if (
      form.From === "Square Millimeters" &&
      form.To === "Square Centimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.01 };
      });
    } else if (
      form.From === "Square Centimeters" &&
      form.To === "Square Millimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 100 };
      });
    } else if (
      form.From === "Square Millimeters" &&
      form.To === "Square Meters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000001 };
      });
    } else if (
      form.From === "Square Meters" &&
      form.To === "Square Millimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1000000 };
      });
    } else if (
      form.From === "Square Millimeters" &&
      form.To === "Square Hectares"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0000000001 };
      });
    } else if (
      form.From === "Square Hectares" &&
      form.To === "Square Millimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10000000000 };
      });
    } else if (
      form.From === "Square Millimeters" &&
      form.To === "Square Kilometers"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000000000001 };
      });
    } else if (
      form.From === "Square Kilometers" &&
      form.To === "Square Millimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1000000000000 };
      });
    } else if (
      form.From === "Square Millimeters" &&
      form.To === "Square Inches"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00155 };
      });
    } else if (
      form.From === "Square Inches" &&
      form.To === "Square Millimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 645.16 };
      });
    } else if (
      form.From === "Square Millimeters" &&
      form.To === "Square Feet"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000011 };
      });
    } else if (
      form.From === "Square Feet" &&
      form.To === "Square Millimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 92903.04 };
      });
    } else if (
      form.From === "Square Millimeters" &&
      form.To === "Square Yards"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000001 };
      });
    } else if (
      form.From === "Square Yards" &&
      form.To === "Square Millimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 836127.4 };
      });
    } else if (form.From === "Square Millimeters" && form.To === "Acres") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000000000247105 };
      });
    } else if (form.From === "Acres" && form.To === "Square Millimeters") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 4046856422 };
      });
    } else if (
      form.From === "Square Millimeters" &&
      form.To === "Square Miles"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 2589988110336 };
      });
    }
    // Square Centimeters
    else if (
      form.From === "Square Centimeters" &&
      form.To === "Square Meters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0001 };
      });
    } else if (
      form.From === "Square Meters" &&
      form.To === "Square Centimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10000 };
      });
    } else if (form.From === "Square Centimeters" && form.To === "Hectares") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00000001 };
      });
    } else if (form.From === "Hectares" && form.To === "Square Centimeters") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 100000000 };
      });
    } else if (
      form.From === "Square Centimeters" &&
      form.To === "Square Kilometers"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0000000001 };
      });
    } else if (
      form.From === "Square Kilometers" &&
      form.To === "Square Centimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10000000000 };
      });
    } else if (
      form.From === "Square Centimeters" &&
      form.To === "Square Inches"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.155 };
      });
    } else if (
      form.From === "Square Inches" &&
      form.To === "Square Centimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 6.4516 };
      });
    } else if (
      form.From === "Square Centimeters" &&
      form.To === "Square Feet"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.001076 };
      });
    } else if (
      form.From === "Square Feet" &&
      form.To === "Square Centimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 929.0304 };
      });
    } else if (
      form.From === "Square Centimeters" &&
      form.To === "Square Yards"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00012 };
      });
    } else if (
      form.From === "Square Yards" &&
      form.To === "Square Centimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 8361.274 };
      });
    } else if (form.From === "Square Centimeters" && form.To === "Acres") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000000024710538 };
      });
    } else if (form.From === "Acres" && form.To === "Square Centimeters") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 40468564 };
      });
    } else if (
      form.From === "Square Centimeters" &&
      form.To === "Square Miles"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00000000003861 };
      });
    } else if (
      form.From === "Square Miles" &&
      form.To === "Square Centimeters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 25899881103 };
      });
    }

    // Square Meters
    else if (form.From === "Square Meters" && form.To === "Hectares") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0001 };
      });
    } else if (
      form.From === "Square Meters" &&
      form.To === "Square Kilometers"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.000001 };
      });
    } else if (form.From === "Square Meters" && form.To === "Square Inches") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1550.0031 };
      });
    } else if (form.From === "Square Meters" && form.To === "Square Feet") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10.7639104 };
      });
    } else if (form.From === "Square Meters" && form.To === "Square Yards") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1.19599005 };
      });
    } else if (form.From === "Square Meters" && form.To === "Acres") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.0002471054 };
      });
    } else if (form.From === "Square Meters" && form.To === "Square Miles") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 3.86102159e-7 };
      });
    } else if (form.From === "Hectares" && form.To === "Square Meters") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 10000 };
      });
    } else if (
      form.From === "Square Kilometers" &&
      form.To === "Square Meters"
    ) {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 1000000 };
      });
    } else if (form.From === "Square Inches" && form.To === "Square Meters") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.00064516 };
      });
    } else if (form.From === "Square Feet" && form.To === "Square Meters") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.09290304 };
      });
    } else if (form.From === "Square Yards" && form.To === "Square Meters") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 0.83612736 };
      });
    } else if (form.From === "Acres" && form.To === "Square Meters") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 4046.85642 };
      });
    } else if (form.From === "Square Miles" && form.To === "Square Meters") {
      setform((prevform) => {
        return { ...prevform, Result: prevform.Quantity * 2589988.1103 };
      });
    }

    // Hectares
    else if (form.From === "Hectares") {
      if (form.To === "Square Kilometers") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 100 };
        });
      } else if (form.To === "Square Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 15500031 };
        });
      } else if (form.To === "Square Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 107639 };
        });
      } else if (form.To === "Square Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 11960 };
        });
      } else if (form.To === "Acres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 2.471 };
        });
      } else if (form.To === "Square Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 259 };
        });
      }
    } else if (form.To === "Hectares") {
      if (form.From === "Square Kilometers") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 100 };
        });
      } else if (form.From === "Square Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 15500031 };
        });
      } else if (form.From === "Square Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 107639 };
        });
      } else if (form.From === "Square Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 11960 };
        });
      } else if (form.From === "Acres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 2.471 };
        });
      } else if (form.From === "Square Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 259 };
        });
      }
    }
    // Square Kilometers
    else if (form.From === "Square Kilometers") {
      if (form.To === "Square Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1550003100.0062 };
        });
      } else if (form.To === "Square Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 10763910.41671 };
        });
      } else if (form.To === "Square Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1195990.046301 };
        });
      } else if (form.To === "Acres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 247.1053814672 };
        });
      } else if (form.To === "Square Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.3861021585424 };
        });
      } else if (form.To === "Hectares") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 100 };
        });
      }
    } else if (form.To === "Square Kilometers") {
      if (form.From === "Square Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1550003100.0062 };
        });
      } else if (form.From === "Square Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 10763910.41671 };
        });
      } else if (form.From === "Square Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1195990.046301 };
        });
      } else if (form.From === "Acres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 247.1053814672 };
        });
      } else if (form.From === "Square Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.3861021585424 };
        });
      }
    }
    // Square Inches
    else if (form.From === "Inches") {
      if (form.To === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.0833333 };
        });
      } else if (form.To === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.0277778 };
        });
      } else if (form.To === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.000015783 };
        });
      } else if (form.To === "Hectares") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.000000000002471 };
        });
      } else if (form.To === "Acres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.0000000616115 };
        });
      }
    } else if (form.To === "Inches") {
      if (form.From === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.0833333 };
        });
      } else if (form.From === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.0277778 };
        });
      } else if (form.From === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.000015783 };
        });
      } else if (form.From === "Hectares") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.000000000002471 };
        });
      } else if (form.From === "Acres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.0000000616115 };
        });
      }
    }
    // Square Feet
    else if (form.From === "Square Feet") {
      if (form.To === "Square Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 9 };
        });
      } else if (form.To === "Acres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 43560 };
        });
      } else if (form.To === "Square Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 27878400 };
        });
      }
    } else if (form.To === "Square Feet") {
      if (form.From === "Square Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 9 };
        });
      } else if (form.From === "Acres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 43560 };
        });
      } else if (form.From === "Square Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 27878400 };
        });
      }
    }
    // Square Yards
    else if (form.From === "Square Yards") {
      if (form.To === "Acres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 4840 };
        });
      } else if (form.To === "Square Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3097600 };
        });
      }
    } else if (form.To === "Square Yards") {
      if (form.From === "Acres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 4840 };
        });
      } else if (form.From === "Square Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3097600 };
        });
      }
    }

    // Acres
    else if (form.From === "Acres") {
      if (form.To === "Square Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.0015625 };
        });
      }
    } else if (form.To === "Acres") {
      if (form.From === "Square Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 640 };
        });
      }
    }

    // Energy

    // Electronvolts
    else if (form.From === "Electronvolt") {
      if (form.To === "Horsepowerhour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 7.3725061361e-22 };
        });
      } else if (form.To === "Megawatthour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 2.7777777778e-19 };
        });
      } else if (form.To === "Newtonmeter") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.602176634e-19 };
        });
      } else if (form.To === "Watthour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 4.4504905879e-23 };
        });
      } else if (form.To === "Joules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.602176634e-19 };
        });
      } else if (form.To === "Kilojoules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.602176634e-22 };
        });
      } else if (form.To === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.1817059015e-19 };
        });
      }
    } else if (form.To === "Electronvolt") {
      if (form.From === "Horsepowerhour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 7.3725061361e-22 };
        });
      } else if (form.From === "Megawatthour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 2.7777777778e-19 };
        });
      } else if (form.From === "Newtonmeter") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.602176634e-19 };
        });
      } else if (form.From === "Watthour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 4.4504905879e-23 };
        });
      } else if (form.From === "Joules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.602176634e-19 };
        });
      } else if (form.From === "Kilojoules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.602176634e-22 };
        });
      } else if (form.From === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.1817059015e-19 };
        });
      }
    }

    // Horsepowerhour
    else if (form.From === "Horsepowerhour") {
      if (form.To === "Megawatthour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.0007457 };
        });
      } else if (form.To === "Newtonmeter") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 745.7 };
        });
      } else if (form.To === "Watthour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 2684.5195376962 };
        });
      } else if (form.To === "Joules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 745.7 * 3600 };
        });
      } else if (form.To === "Kilojoules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.7457 * 3600 };
        });
      } else if (form.To === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 550 * 0.7457 };
        });
      }
    } else if (form.To === "Horsepowerhour") {
      if (form.From === "Megawatthour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.0007457 };
        });
      } else if (form.From === "Newtonmeter") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 745.7 };
        });
      } else if (form.From === "Watthour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 2684.5195376962 };
        });
      } else if (form.From === "Joules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / (745.7 * 3600) };
        });
      } else if (form.From === "Kilojoules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / (0.7457 * 3600) };
        });
      } else if (form.From === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / (550 * 0.7457) };
        });
      }
    }

    // megawatthour
    else if (form.From === "Megawatthour") {
      if (form.To === "Newtonmeter") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3.6e9 };
        });
      } else if (form.To === "Watthour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1e6 };
        });
      } else if (form.To === "Joules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3.6e9 * 3600 };
        });
      } else if (form.To === "Kilojoules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3.6e6 };
        });
      } else if (form.To === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 2.685e9 };
        });
      }
    } else if (form.To === "Megawatthour") {
      if (form.From === "Newtonmeter") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3.6e9 };
        });
      } else if (form.From === "Watthour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1e6 };
        });
      } else if (form.From === "Joules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / (3.6e9 * 3600) };
        });
      } else if (form.From === "Kilojoules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3.6e6 };
        });
      } else if (form.From === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 2.685e9 };
        });
      }
    }

    // Newtonmeter
    else if (form.From === "Newtonmeter") {
      if (form.To === "Watthour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3600 };
        });
      } else if (form.To === "Joules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity };
        });
      } else if (form.To === "Kilojoules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1000 };
        });
      } else if (form.To === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.35582 };
        });
      }
    } else if (form.To === "Newtonmeter") {
      if (form.From === "Watthour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3600 };
        });
      } else if (form.From === "Joules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity };
        });
      } else if (form.From === "Kilojoules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1000 };
        });
      } else if (form.From === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.35582 };
        });
      }
    }

    // Watthour
    else if (form.From === "Watthour") {
      if (form.To === "Joules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3600 };
        });
      } else if (form.To === "Kilojoules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3.6 };
        });
      } else if (form.To === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 2655.22 };
        });
      }
    } else if (form.To === "Watthour") {
      if (form.From === "Joules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3600 };
        });
      } else if (form.From === "Kilojoules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3.6 };
        });
      } else if (form.From === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 2655.22 };
        });
      }
    }

    // Joules
    else if (form.From === "Joules") {
      if (form.To === "Kilojoules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1000 };
        });
      } else if (form.To === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.35582 };
        });
      }
    } else if (form.To === "Joules") {
      if (form.From === "Kilojoules") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1000 };
        });
      } else if (form.From === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.35582 };
        });
      }
    }

    // Kilojoules
    else if (form.From === "Kilojoules") {
      if (form.To === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 737.562 };
        });
      }
    } else if (form.To === "Kilojoules") {
      if (form.From === "Footpounds") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 737.562 };
        });
      }
    }

    // Length

    //      Nanometers
    else if (form.From === "Nanometers") {
      if (form.To === "Microns") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1000 };
        });
      } else if (form.To === "Millimeter") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1e6 };
        });
      } else if (form.To === "Centimeters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1e7 };
        });
      } else if (form.To === "Meters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1e9 };
        });
      } else if (form.To === "Kilometers") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1e12 };
        });
      } else if (form.To === "Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 2.54e7 };
        });
      } else if (form.To === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3.048e8 };
        });
      } else if (form.To === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 9.144e8 };
        });
      } else if (form.To === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.609e12 };
        });
      } else if (form.To === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.852e12 };
        });
      }
    } else if (form.To === "Nanometers") {
      if (form.From === "Microns") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1000 };
        });
      } else if (form.From === "Millimeter") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1e6 };
        });
      } else if (form.From === "Centimeters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1e7 };
        });
      } else if (form.From === "Meters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1e9 };
        });
      } else if (form.From === "Kilometers") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1e12 };
        });
      } else if (form.From === "Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 2.54e7 };
        });
      } else if (form.From === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3.048e8 };
        });
      } else if (form.From === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 9.144e8 };
        });
      } else if (form.From === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.609e12 };
        });
      } else if (form.From === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.852e12 };
        });
      }
    }

    // Microns
    else if (form.From === "Microns") {
      if (form.To === "Millimeters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1000 };
        });
      } else if (form.To === "Centimeters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 10000 };
        });
      } else if (form.To === "Meters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1000000 };
        });
      } else if (form.To === "Kilometers") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1e9 };
        });
      } else if (form.To === "Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 25400 };
        });
      } else if (form.To === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 304800 };
        });
      } else if (form.To === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 914400 };
        });
      } else if (form.To === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.609e9 };
        });
      } else if (form.To === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.852e9 };
        });
      }
    } else if (form.To === "Microns") {
      if (form.From === "Millimeters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1000 };
        });
      } else if (form.From === "Centimeters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 10000 };
        });
      } else if (form.From === "Meters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1000000 };
        });
      } else if (form.From === "Kilometers") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1e9 };
        });
      } else if (form.From === "Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 25400 };
        });
      } else if (form.From === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 304800 };
        });
      } else if (form.From === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 914400 };
        });
      } else if (form.From === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.609e9 };
        });
      } else if (form.From === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.852e9 };
        });
      }
    }

    // Millimeters
    else if (form.From === "Millimeters") {
      if (form.To === "Centimeters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 10 };
        });
      } else if (form.To === "Meters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1000 };
        });
      } else if (form.To === "Kilometers") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1e6 };
        });
      } else if (form.To === "Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 25.4 };
        });
      } else if (form.To === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 304.8 };
        });
      } else if (form.To === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 914.4 };
        });
      } else if (form.To === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.609e6 };
        });
      } else if (form.To === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.852e6 };
        });
      }
    } else if (form.To === "Millimeters") {
      if (form.From === "Centimeters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 10 };
        });
      } else if (form.From === "Meters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1000 };
        });
      } else if (form.From === "Kilometers") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1e6 };
        });
      } else if (form.From === "Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 25.4 };
        });
      } else if (form.From === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 304.8 };
        });
      } else if (form.From === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 914.4 };
        });
      } else if (form.From === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.609e6 };
        });
      } else if (form.From === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.852e6 };
        });
      }
    }

    // Centimeters
    else if (form.From === "Centimeters") {
      if (form.To === "Meters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 100 };
        });
      } else if (form.To === "Kilometers") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 100000 };
        });
      } else if (form.To === "Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 2.54 };
        });
      } else if (form.To === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 30.48 };
        });
      } else if (form.To === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 91.44 };
        });
      } else if (form.To === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 160934.4 };
        });
      } else if (form.To === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 185200 };
        });
      }
    } else if (form.To === "Centimeters") {
      if (form.From === "Meters") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 100 };
        });
      } else if (form.From === "Kilometers") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 100000 };
        });
      } else if (form.From === "Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 2.54 };
        });
      } else if (form.From === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 30.48 };
        });
      } else if (form.From === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 91.44 };
        });
      } else if (form.From === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 160934.4 };
        });
      } else if (form.From === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 185200 };
        });
      }
    }

    // Meters
    else if (form.From === "Meters") {
      if (form.To === "Kilometers") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1000 };
        });
      } else if (form.To === "Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 39.37 };
        });
      } else if (form.To === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3.281 };
        });
      } else if (form.To === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.094 };
        });
      } else if (form.To === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1609 };
        });
      } else if (form.To === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1852 };
        });
      }
    } else if (form.To === "Meters") {
      if (form.From === "Kilometers") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1000 };
        });
      } else if (form.From === "Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 39.37 };
        });
      } else if (form.From === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3.281 };
        });
      } else if (form.From === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.094 };
        });
      } else if (form.From === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1609 };
        });
      } else if (form.From === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1852 };
        });
      }
    }

    // Kilometers
    else if (form.From === "Kilometers") {
      if (form.To === "Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 39370.08 };
        });
      } else if (form.To === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3280.84 };
        });
      } else if (form.To === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1093.61 };
        });
      } else if (form.To === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.62137 };
        });
      } else if (form.To === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.852 };
        });
      }
    } else if (form.To === "Kilometers") {
      if (form.From === "Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 39370.08 };
        });
      } else if (form.From === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3280.84 };
        });
      } else if (form.From === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1093.61 };
        });
      } else if (form.From === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.62137 };
        });
      } else if (form.From === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.852 };
        });
      }
    }

    // Inches
    else if (form.From === "Inches") {
      if (form.To === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 12 };
        });
      } else if (form.To === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 36 };
        });
      } else if (form.To === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 63360 };
        });
      } else if (form.To === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 72913.38583 };
        });
      }
    } else if (form.To === "Inches") {
      if (form.From === "Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 12 };
        });
      } else if (form.From === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 36 };
        });
      } else if (form.From === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 63360 };
        });
      } else if (form.From === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 72913.38583 };
        });
      }
    }

    // Feet
    else if (form.From === "Feet") {
      if (form.To === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3 };
        });
      } else if (form.To === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 5280 };
        });
      } else if (form.To === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 6076.12 };
        });
      }
    } else if (form.To === "Feet") {
      if (form.From === "Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3 };
        });
      } else if (form.From === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 5280 };
        });
      } else if (form.From === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 6076.12 };
        });
      }
    }

    // Yards
    else if (form.From === "Yards") {
      if (form.To === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1760 };
        });
      } else if (form.To === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 2025.372 };
        });
      }
    } else if (form.To === "Yards") {
      if (form.From === "Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1760 };
        });
      } else if (form.From === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 2025.372 };
        });
      }
    }

    // Miles
    else if (form.From === "Miles") {
      if (form.To === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.868976 };
        });
      }
    } else if (form.To === "Miles") {
      if (form.From === "Nautical Miles") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.868976 };
        });
      }
    }

    // Speed

    // Centimeters Per Second
    else if (form.From === "Centimeters per second") {
      if (form.To === "Meters per second") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 100 };
        });
      } else if (form.To === "Kilometers per hour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.036 };
        });
      } else if (form.To === "Miles per hour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.022371 };
        });
      } else if (form.To === "Feet per second") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.032808 };
        });
      } else if (form.To === "Knots") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.019438 };
        });
      } else if (form.To === "Mach") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.00002953 };
        });
      }
    } else if (form.To === "Centimeters per second") {
      if (form.From === "Meters per second") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 100 };
        });
      } else if (form.From === "Kilometers per hour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.036 };
        });
      } else if (form.From === "Miles per hour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.022371 };
        });
      } else if (form.From === "Feet per second") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.032808 };
        });
      } else if (form.From === "Knots") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.019438 };
        });
      } else if (form.From === "Mach") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.00002953 };
        });
      }
    }

    // Meters per second
    else if (form.From === "Meters per second") {
      if (form.To === "Kilometers per hour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3.6 };
        });
      } else if (form.To === "Miles per hour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 2.236936 };
        });
      } else if (form.To === "Feet per second") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3.28084 };
        });
      } else if (form.To === "Knots") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.943844 };
        });
      } else if (form.To === "Mach") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.002938 };
        });
      }
    } else if (form.To === "Meters per second") {
      if (form.From === "Kilometers per hour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3.6 };
        });
      } else if (form.From === "Miles per hour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 2.236936 };
        });
      } else if (form.From === "Feet per second") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3.28084 };
        });
      } else if (form.From === "Knots") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.943844 };
        });
      } else if (form.From === "Mach") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.002938 };
        });
      }
    }

    // Kilometers per hour
    else if (form.From === "Kilometers per hour") {
      if (form.To === "Miles per hour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.621371 };
        });
      } else if (form.To === "Feet per second") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.911344 };
        });
      } else if (form.To === "Knots") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.539957 };
        });
      } else if (form.To === "Mach") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.000816 };
        });
      }
    } else if (form.To === "Kilometers per hour") {
      if (form.From === "Miles per hour") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.621371 };
        });
      } else if (form.From === "Feet per second") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.911344 };
        });
      } else if (form.From === "Knots") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.539957 };
        });
      } else if (form.From === "Mach") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.000816 };
        });
      }
    }

    // Miles per hour
    else if (form.From === "Miles per hour") {
      if (form.To === "Feet per second") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.46667 };
        });
      } else if (form.To === "Knots") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.868976 };
        });
      } else if (form.To === "Mach") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.001313 };
        });
      }
    } else if (form.To === "Miles per hour") {
      if (form.From === "Feet per second") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.46667 };
        });
      } else if (form.From === "Knots") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.868976 };
        });
      } else if (form.From === "Mach") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.001313 };
        });
      }
    }

    // Feet per second
    else if (form.From === "Feet per second") {
      if (form.To === "Knots") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.592484 };
        });
      } else if (form.To === "Mach") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.000887 };
        });
      }
    } else if (form.To === "Feet per second") {
      if (form.From === "Knots") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.592484 };
        });
      } else if (form.From === "Mach") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.000887 };
        });
      }
    }

    // Knots
    else if (form.From === "Knots") {
      if (form.To === "Mach") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.001514 };
        });
      }
    } else if (form.To === "Knots") {
      if (form.From === "Mach") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.001514 };
        });
      }
    }

    // Volume

    // Millilitres
    else if (form.From === "Millilitres") {
      if (form.To === "Cubic Centimetres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity };
        });
      } else if (form.To === "Litres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1000 };
        });
      } else if (form.To === "Cubic Metres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1000000 };
        });
      } else if (form.To === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 4546.09 };
        });
      } else if (form.To === "Cubic Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 16.3871 };
        });
      } else if (form.To === "Cubic Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 28316.8 };
        });
      } else if (form.To === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 764554.9 };
        });
      } else if (form.To === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3785.41 };
        });
      }
    } else if (form.To === "Millilitres") {
      if (form.From === "Cubic Centimetres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity };
        });
      } else if (form.From === "Litres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1000 };
        });
      } else if (form.From === "Cubic Metres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1000000 };
        });
      } else if (form.From === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 4546.09 };
        });
      } else if (form.From === "Cubic Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 16.3871 };
        });
      } else if (form.From === "Cubic Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 28316.8 };
        });
      } else if (form.From === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 764554.9 };
        });
      } else if (form.From === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3785.41 };
        });
      }
    }

    // Cubic Centimetres
    else if (form.From === "Cubic Centimetres") {
      if (form.To === "Litres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1000 };
        });
      } else if (form.To === "Cubic Metres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1000000 };
        });
      } else if (form.To === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 4546.09 };
        });
      } else if (form.To === "Cubic Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 16.3871 };
        });
      } else if (form.To === "Cubic Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 28316.8 };
        });
      } else if (form.To === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 764554.9 };
        });
      } else if (form.To === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 3785.41 };
        });
      }
    } else if (form.To === "Cubic Centimetres") {
      if (form.From === "Litres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1000 };
        });
      } else if (form.From === "Cubic Metres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1000000 };
        });
      } else if (form.From === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 4546.09 };
        });
      } else if (form.From === "Cubic Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 16.3871 };
        });
      } else if (form.From === "Cubic Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 28316.8 };
        });
      } else if (form.From === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 764554.9 };
        });
      } else if (form.From === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3785.41 };
        });
      }
    }

    // Litres
    else if (form.From === "Litres") {
      if (form.To === "Cubic Metres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1000 };
        });
      } else if (form.To === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.219969 };
        });
      } else if (form.To === "Cubic Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 61.0237 };
        });
      } else if (form.To === "Cubic Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.0353147 };
        });
      } else if (form.To === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.00130795 };
        });
      } else if (form.To === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.264172 };
        });
      }
    } else if (form.To === "Litres") {
      if (form.From === "Cubic Metres") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1000 };
        });
      } else if (form.From === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 4.54609 };
        });
      } else if (form.From === "Cubic Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.0163871 };
        });
      } else if (form.From === "Cubic Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 28.3168 };
        });
      } else if (form.From === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 764.555 };
        });
      } else if (form.From === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 3.78541 };
        });
      }
    }

    // Cubic Metres
    else if (form.From === "Cubic Metres") {
      if (form.To === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 219.969 };
        });
      } else if (form.To === "Cubic Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 61023.7 };
        });
      } else if (form.To === "Cubic Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 35.3147 };
        });
      } else if (form.To === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.30795 };
        });
      } else if (form.To === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 264.172 };
        });
      }
    } else if (form.To === "Cubic Metres") {
      if (form.From === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 219.969 };
        });
      } else if (form.From === "Cubic Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 61023.7 };
        });
      } else if (form.From === "Cubic Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 35.3147 };
        });
      } else if (form.From === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.30795 };
        });
      } else if (form.From === "Gallons(UK)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 264.172 };
        });
      }
    }

    // Gallons(UK)
    else if (form.From === "Gallons(UK)") {
      if (form.To === "Cubic Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 277.419 };
        });
      } else if (form.To === "Cubic Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.160544 };
        });
      } else if (form.To === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.00495113 };
        });
      } else if (form.To === "Gallons(US)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 1.20095 };
        });
      }
    } else if (form.To === "Gallons(UK)") {
      if (form.From === "Cubic Inches") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 277.419 };
        });
      } else if (form.From === "Cubic Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.160544 };
        });
      } else if (form.From === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.00495113 };
        });
      } else if (form.From === "Gallons(US)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 1.20095 };
        });
      }
    }

    // Cubic Inches
    else if (form.From === "Cubic Inches") {
      if (form.To === "Cubic Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.000578704 };
        });
      } else if (form.To === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.0000214335 };
        });
      } else if (form.To === "Gallons(US)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.00360465 };
        });
      }
    } else if (form.To === "Cubic Inches") {
      if (form.From === "Cubic Feet") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.000578704 };
        });
      } else if (form.From === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.0000214335 };
        });
      } else if (form.From === "Gallons(US)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.00360465 };
        });
      }
    }

    // Cubic Feet
    else if (form.From === "Cubic Feet") {
      if (form.To === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 0.037037 };
        });
      } else if (form.To === "Gallons(US)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 7.48052 };
        });
      }
    } else if (form.To === "Cubic Feet") {
      if (form.From === "Cubic Yards") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 0.037037 };
        });
      } else if (form.From === "Gallons(US)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 7.48052 };
        });
      }
    }

    // Cubic Yards
    else if (form.From === "Cubic Yards") {
      if (form.To === "Gallons(US)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity * 201.974 };
        });
      }
    } else if (form.To === "Cubic Yards") {
      if (form.From === "Gallons(US)") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity / 201.974 };
        });
      }
    }

    // temperature

    // Celsius
    else if (form.From === "Celsius") {
      if (form.To === "Fahrenheit") {
        setform((prevform) => {
          return { ...prevform, Result: (prevform.Quantity * 9) / 5 + 32 };
        });
      } else if (form.To === "Kelvin") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity + 273.15 };
        });
      }
    } else if (form.To === "Celsius") {
      if (form.From === "Fahrenheit") {
        setform((prevform) => {
          return { ...prevform, Result: ((prevform.Quantity - 32) * 5) / 9 };
        });
      } else if (form.From === "Kelvin") {
        setform((prevform) => {
          return { ...prevform, Result: prevform.Quantity - 273.15 };
        });
      }
    }

    // Fahrenheit
    else if (form.From === "Fahrenheit" && form.To === "Kelvin") {
      setform((prevform) => {
        return { ...prevform, Result: ((prevform.Quantity + 459.67) * 5) / 9 };
      });
    } else if (form.From === "Kelvin" && form.To === "Fahrenheit") {
      setform((prevform) => {
        return { ...prevform, Result: (prevform.Quantity * 9) / 5 - 459.67 };
      });
    }
  }, [form]);

  const handleresult = () => {
    setlist((prev) => {
      return [...prev, form];
    });
  };

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setform({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    resulthandler();
  }, [form.Quantity, form.To, form.From]);

  const switcher = useCallback(() => {
    let latest;
    setform((prev) => {
      console.log({ ...prev, From: prev.To, To: prev.From });
      latest = { ...prev, From: prev.To, To: prev.From };
      return latest;
    });
  }, [resulthandler]);

  return (
    <div className="bg-zinc-950 h-screen p-20 ">
      {/* First div */}
      <div className="lg:flex justify-between items-end flex-row">
        <h1 className="text-7xl text-white  pr-10">Online Unit Converter</h1>
        <div>
          <select
            name="unit"
            className="rounded-full px-14 py-3 border-orange-600 border-4 bg-zinc-950 text-white text-xl font-bold"
            onChange={(e) => {
              setunit(e.target.value);
            }}
            value={unit}
          >
            <option value="angle">Angle</option>
            <option value="area">Area</option>
            <option value="currency">Currency</option>
            <option value="energy">Energy</option>
            <option value="length">Length</option>
            <option value="speed">Speed</option>
            <option value="temperature">Temperature</option>
            <option value="volume">Volume</option>
            <option value="weightandmass">Weight and Mass</option>
          </select>
        </div>
        <button
          className=" bg-orange-600 text-black text-lg px-10 rounded-3xl font-bold "
          onClick={handleresult}
        >
          Save Result
        </button>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          {/* Table Div */}
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-zinc-900 rounded-xl">
            <table className="min-w-full divide-y divide-gray-500">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left font-semibold text-white sm:pl-0"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 font-semibold text-white"
                  >
                    From
                  </th>
                  <th></th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 font-semibold text-white"
                  >
                    To
                  </th>
                  <th
                    scope="col"
                    className="px-3 text-right font-semibold text-white"
                  >
                    Result
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="text-white">
                    {/* Main Input */}
                    <input
                      className="Maininput block text-sm font-medium leading-6 text-white mr-10 mt-6 mb-6 rounded-md px-8 py-2 b border-2 border-slate-400 bg-zinc-900"
                      onChange={inputHandler}
                      name="Quantity"
                      value={form.Quantity}
                      type="number"
                      min="0"
                      step="1"
                      autoFocus
                      // onInput={validateinput}
                    />
                  </td>
                  <td>{keymap[unit]("From")}</td>
                  <td>
                    <button
                      className="rounded-full bg-white p-3 border-orange-600 border-2"
                      onClick={switcher}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="">{keymap[unit]("To")}</td>
                  <td>
                    <input
                      htmlFor="Result"
                      className="font-medium leading-6  my-6 rounded-md px-8 py-2 block ml-auto"
                      value={form.Result}
                      name="Result"
                      readOnly
                    />
                  </td>
                </tr>
                {/* Make a row for the data that will be saved from the clicking the save results button */}
                {list.map((listitem) => {
                  return (
                    <tr className="text-white">
                      <td>{listitem.Quantity}</td>
                      <td>{listitem.From}</td>
                      <td></td>
                      <td>{listitem.To}</td>
                      <td className="font-bold">{listitem.Result}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
          <div>
            <a
              href="/Converter"
              className="flex max-w-md my-10 rounded-full border-2 border-orange-400 text-center px-6 py-4 text-xl font-bold mx-auto items-center bg-white hover:bg-gray-400 ease-linear duration-300"
            >
              File Converter
            </a>
          </div>
      </div>
    </div>
  );
}
