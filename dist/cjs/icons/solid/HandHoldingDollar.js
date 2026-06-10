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
var HandHoldingDollar_exports = {};
__export(HandHoldingDollar_exports, {
  default: () => HandHoldingDollar_default
});
module.exports = __toCommonJS(HandHoldingDollar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandHoldingDollarSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568.197 336.312C555.072 318.5 530.059 314.656 512.264 327.844L392.592 416.016H271.98C263.232 416.016 255.982 408.766 255.982 400.023C255.982 391.273 263.232 384.023 271.98 384.023H350.227C366.225 384.023 380.975 373.148 383.598 357.406C386.848 337.406 371.475 320.031 351.977 320.031H191.986C164.988 320.031 138.865 329.281 117.867 346.281L71.369 384.023H15.998C7.25 384.023 0 391.273 0 400.023V496C0 504.75 7.25 512 15.998 512H362.977C385.006 512 406.896 504.812 424.676 491.727L559.729 392.211C577.51 379.117 581.305 354.094 568.197 336.312ZM279.344 175.047C271.656 173.891 261.688 170.297 252.906 167.125L248.031 165.375C235.5 160.969 221.812 167.5 217.375 179.984S219.5 206.188 231.969 210.625L236.625 212.281C245.111 215.342 254.523 218.379 264.031 220.596V232C264.031 245.25 274.781 256 288.031 256S312.031 245.25 312.031 232V221.574C337.297 215.852 354.916 199.723 359.031 175.859C367.719 125.812 320.125 112.203 294.594 104.906L288.406 103.109C263 95.641 263.562 92.422 264.281 88.312C265.438 81.547 279.594 78.25 296.5 80.922C301.438 81.703 307.875 83.469 316.156 86.344C328.688 90.625 342.375 84.031 346.688 71.5S344.375 45.312 331.844 40.969C324.242 38.342 317.932 36.613 312.031 35.25V24C312.031 10.75 301.281 0 288.031 0S264.031 10.75 264.031 24V34.516C238.77 40.232 221.072 56.254 216.969 80.125C208.375 129.609 256.656 143.812 274.875 149.172L281.375 151.047C313.031 160.109 312.531 162.938 311.719 167.688C310.562 174.453 296.469 177.75 279.344 175.047Z" })
  }
));
HandHoldingDollarSolid.displayName = "HandHoldingDollarSolid";
var HandHoldingDollar_default = HandHoldingDollarSolid;
