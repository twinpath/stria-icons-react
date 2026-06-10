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
var Staff_exports = {};
__export(Staff_exports, {
  default: () => Staff_default
});
module.exports = __toCommonJS(Staff_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StaffDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 303.982V348.104L156.121 287.982H111.998C103.125 287.982 96 295.107 96 303.982ZM369.857 284.732L402.105 303.357C409.73 307.855 419.605 305.23 423.98 297.607L443.479 263.734L369.857 284.732Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 79.996V183.863C512 219.611 488.252 250.984 454.004 260.734L285.139 308.98C272.014 312.73 260.141 319.73 250.516 329.355L74.902 504.969C65.527 514.344 50.402 514.344 41.029 504.969L7.031 470.971C-2.344 461.598 -2.344 446.473 7.031 437.098L182.645 261.484C203.77 240.359 230.018 224.986 258.766 216.736L416.006 171.74V95.994H365.635L354.135 119.117C350.135 126.992 340.51 130.242 332.637 126.242L275.389 97.619C267.516 93.744 264.266 84.119 268.266 76.246L284.264 44.248C297.764 17.123 325.512 0 355.76 0H432.004C476.127 0 512 35.873 512 79.996Z" })
    ]
  }
));
StaffDuotone.displayName = "StaffDuotone";
var Staff_default = StaffDuotone;
