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
var Scarecrow_exports = {};
__export(Scarecrow_exports, {
  default: () => Scarecrow_default
});
module.exports = __toCommonJS(Scarecrow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScarecrowSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 448.125C216.25 448.125 208.625 446.25 201.75 442.625L192 437.375V496C192 504.75 199.25 512 208 512H240C248.75 512 256 504.75 256 496V437.25L246.25 442.5C239.375 446.25 231.75 448.125 224 448.125ZM445.766 186.25L419.266 160L437.641 141.75C442.641 136.75 439.141 128 431.891 128H314.137C317.762 118 320.012 107.25 320.012 96C320.012 43 277.01 0 224.008 0S128.004 43 128.004 96C128.004 107.25 130.256 118 133.881 128H16.002C8.875 128 5.25 136.625 10.25 141.75L28.752 160L2.25 186.25C-0.75 189.375 -0.75 194.5 2.25 197.625L28.752 224L10.375 242.25C5.375 247.25 8.875 256 16.127 256H122.254L96.254 397.25C94.129 410.25 107.379 420.125 119.129 414.25L151.756 390C156.756 386.25 163.381 385.75 168.881 388.75L216.758 414.25C221.258 416.625 226.633 416.625 231.133 414.25L279.01 388.75C284.51 385.75 291.135 386.25 296.135 390L328.762 414.25C340.512 420.125 353.887 410.25 351.762 397.25L325.887 256H432.016C439.141 256 442.766 247.375 437.766 242.25L419.266 224L445.641 197.75C448.766 194.5 448.766 189.5 445.766 186.25ZM192.008 96C183.256 96 176.006 88.75 176.006 80S183.256 64 192.008 64C200.758 64 208.008 71.25 208.008 80S200.758 96 192.008 96ZM256.01 112C247.26 112 240.008 104.75 240.008 96S247.26 80 256.01 80S272.01 87.25 272.01 96S264.76 112 256.01 112Z" })
  }
));
ScarecrowSolid.displayName = "ScarecrowSolid";
var Scarecrow_default = ScarecrowSolid;
