var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var MicrophoneStand_exports = {};
__export(MicrophoneStand_exports, {
  default: () => MicrophoneStand_default
});
module.exports = __toCommonJS(MicrophoneStand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrophoneStandLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M475.75 33.494C427.751 -12.006 352.252 -11.006 305.377 35.619L276.503 64.244C253.878 86.869 241.128 117.369 240.878 149.369L12.007 406.868C-4.743 425.868 -3.868 454.618 14.007 472.493L39.506 497.993C57.506 515.868 86.381 516.743 105.505 499.993L255.878 366.369V495.931C255.878 504.765 263.106 511.993 271.94 511.993H271.94C280.775 511.993 288.003 504.765 288.003 495.931V337.994L363.877 271.869C395.876 271.744 426.501 258.994 449.25 236.369L474.25 211.369C522.999 162.869 525.624 80.744 475.75 33.494ZM84.256 475.993C77.881 481.618 68.256 481.368 62.256 475.368L36.756 449.868C30.881 443.993 30.506 434.368 36.131 428.118L255.503 181.244L331.877 257.369L84.256 475.993ZM426.501 213.744C409.751 230.369 387.126 239.869 363.627 239.869H359.752L273.003 153.369V149.619C273.128 126.119 282.503 103.494 299.252 86.994L310.377 75.994L437.626 202.744L426.501 213.744ZM459.75 179.619L333.502 53.744C368.876 22.869 422.126 24.619 455.375 57.744C488.625 90.869 490.5 144.119 459.75 179.619Z" })
  }
));
MicrophoneStandLight.displayName = "MicrophoneStandLight";
var MicrophoneStand_default = MicrophoneStandLight;
