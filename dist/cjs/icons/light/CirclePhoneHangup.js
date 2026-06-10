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
var CirclePhoneHangup_exports = {};
__export(CirclePhoneHangup_exports, {
  default: () => CirclePhoneHangup_default
});
module.exports = __toCommonJS(CirclePhoneHangup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CirclePhoneHangupLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM414.768 225.662C327.219 138.113 184.781 138.113 97.232 225.662C84.891 238.003 82.727 256.962 91.973 271.757L116.07 310.283C125.605 325.498 144.631 331.75 161.348 325.177C161.381 325.166 161.424 325.121 161.447 325.121L209.795 305.787C224.998 299.533 234.422 283.789 232.775 267.603L231.738 257.062C247.77 254.023 264.164 254.023 280.186 257.05L279.135 267.691C277.557 284.296 286.881 299.632 302.371 305.841L350.631 325.154C367.357 331.783 386.385 325.464 395.951 310.261L419.949 271.767C429.252 256.984 427.131 238.025 414.768 225.662ZM392.824 254.763L368.795 293.312C368.596 293.644 368.363 293.943 368.098 294.207C366.641 295.666 364.387 296.173 362.463 295.423L314.281 276.142C312.027 275.238 310.756 273.171 310.988 270.794L313.408 246.367C314.16 238.722 309.375 231.617 302.006 229.441C271.898 220.546 240.047 220.558 209.906 229.441C202.504 231.628 197.764 238.755 198.504 246.367L200.934 270.828C201.166 273.048 199.764 275.292 197.752 276.154L149.602 295.4C147.227 296.318 144.531 295.433 143.205 293.312L119.109 254.787C117.783 252.666 118.092 250.058 119.859 248.289C194.924 173.226 317.076 173.226 392.141 248.289C393.887 250.035 394.174 252.621 392.824 254.763Z" })
  }
));
CirclePhoneHangupLight.displayName = "CirclePhoneHangupLight";
var CirclePhoneHangup_default = CirclePhoneHangupLight;
