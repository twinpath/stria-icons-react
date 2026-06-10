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
var PawClaws_exports = {};
__export(PawClaws_exports, {
  default: () => PawClaws_default
});
module.exports = __toCommonJS(PawClaws_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PawClawsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M318.548 222.625C358.798 233.125 388.173 187.75 396.048 158.75C404.548 127.75 399.048 97.75 384.048 80L320.048 0V75C304.048 86.25 290.548 105.375 284.048 129.25C272.173 172.625 287.673 214.5 318.548 222.625ZM314.923 137.625C333.173 70.875 381.548 90.625 365.173 150.375C347.048 217 298.548 197.5 314.923 137.625ZM493.548 190.375L448.048 128V195C428.173 201.5 410.548 219.375 403.298 243.375C392.923 278.001 408.048 311.75 437.173 318.75C467.673 326.001 498.798 301.625 508.798 268.625C517.673 239.125 507.173 209.125 493.548 190.375ZM478.173 259.375C465.423 301.75 421.173 295 433.923 252.625C446.673 210.375 490.923 216.875 478.173 259.375ZM256.048 256C176.673 256 64.048 378.75 64.048 456.25C64.048 491.125 90.923 512 135.798 512C184.673 512 216.923 486.875 256.048 486.875C295.548 486.875 327.923 512 376.298 512C421.298 512 448.048 491.125 448.048 456.25C448.048 378.75 335.423 256 256.048 256ZM376.298 480C356.048 480 338.548 474.25 319.923 468.125C300.298 461.625 279.923 454.875 256.048 454.875C232.423 454.875 212.173 461.625 192.673 468C174.048 474.25 156.423 480 135.798 480C96.048 480 96.048 462.125 96.048 456.25C96.048 393.375 196.298 288 256.048 288S416.048 393.375 416.048 456.25C416.048 462.125 416.048 480 376.298 480ZM108.798 243.375C101.548 219.375 83.923 201.5 64.048 194.875V128L18.548 190.375C4.798 209.125 -5.577 239.125 3.298 268.625C13.298 301.875 44.673 326.001 74.923 318.75C104.048 311.75 119.173 278.001 108.798 243.375ZM34.048 259.375C21.173 216.625 65.548 210.5 78.173 252.625C90.923 295.25 46.673 301.5 34.048 259.375ZM193.548 222.625C224.423 214.5 239.923 172.625 228.048 129.25C221.548 105.375 208.048 86.25 192.048 75V0L128.048 80C113.048 97.75 107.548 127.75 116.048 158.75C123.673 186.75 153.173 233.25 193.548 222.625ZM197.173 137.625C213.423 197.125 165.173 217.375 146.923 150.375C130.673 91 178.923 70.625 197.173 137.625Z" })
  }
));
PawClawsLight.displayName = "PawClawsLight";
var PawClaws_default = PawClawsLight;
