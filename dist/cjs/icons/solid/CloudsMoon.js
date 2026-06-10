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
var CloudsMoon_exports = {};
__export(CloudsMoon_exports, {
  default: () => CloudsMoon_default
});
module.exports = __toCommonJS(CloudsMoon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudsMoonSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 320H446.375C439 283.5 406.75 256 368 256C343.375 256 321.75 267.25 307 284.75C288.375 248.875 251.25 224 208 224C149.75 224 102.375 268.75 97.125 325.625C59.25 338.5 32 373.875 32 416C32 469 75 512 128 512H448C501 512 544 469 544 416S501 320 448 320ZM631 248.75C552.75 263.5 481 204 481 125.625C481 80.5 505.25 39 544.875 16.625C551 13.25 549.5 4 542.5 2.75C532.875 0.875 523 0 513.125 0C424.25 0 352 71.625 352 160C352 160.75 352.25 161.25 352.25 162C368.5 178.75 379.25 200.75 382.5 225.125C421 230.25 454.25 255 470.125 289.875C493.25 293.875 514.125 304.25 531.25 319C573.75 314.25 611.875 293 638.25 260.75C642.75 255.25 637.875 247.375 631 248.75ZM68.25 303.25C83.25 238.625 140.25 192 208 192C248.75 192 286.625 209.25 313.375 238.5C324.875 232 337.5 227.75 350.5 225.625C343.75 188.25 311.25 160 272 160H254.375C247 123.5 214.75 96 176 96S105 123.5 97.625 160H80C35.75 160 0 195.75 0 240C0 273.875 21.25 302.75 51 314.375C56.5 310.25 62.25 306.375 68.25 303.25Z" })
  }
));
CloudsMoonSolid.displayName = "CloudsMoonSolid";
var CloudsMoon_default = CloudsMoonSolid;
