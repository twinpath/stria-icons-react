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
var PersonDigging_exports = {};
__export(PersonDigging_exports, {
  default: () => PersonDigging_default
});
module.exports = __toCommonJS(PersonDigging_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonDiggingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M311.131 416.152C297.389 416.152 285.27 425.014 280.897 437.992L256.159 512H575.999L474.175 306.078C468.927 295.594 458.433 288.855 446.689 288.355C435.07 287.982 424.076 293.848 418.078 303.832L383.324 363.006L300.969 316.453L279.344 191.672C267.86 136.234 218.438 96 161.829 96H110.376C94.408 96 79.158 102.844 68.517 114.797L14.064 176.062C9.252 181.484 7.142 188.781 8.33 195.938S13.877 209.328 20.189 212.891L359.013 404.4L352.111 416.152H311.131ZM69.689 185.734L104.376 146.688C105.907 144.984 108.095 144 110.376 144H161.829C195.798 144 225.454 168.141 232.204 200.641L246.969 285.937L69.689 185.734ZM444.314 353.877L498.788 464.076H379.597L444.314 353.877ZM272.024 95.848C298.51 95.848 320 74.381 320 47.924C320 21.465 298.51 0 272.024 0S224.047 21.465 224.047 47.924C224.047 74.381 245.538 95.848 272.024 95.848ZM84.72 283.641C78.22 279.609 70.205 278.844 63.126 281.703C56.033 284.516 50.705 290.547 48.783 297.938L0.783 481.938C-2.561 494.766 5.111 507.875 17.939 511.219C19.97 511.75 22.017 512 24.017 512C34.674 512 44.408 504.859 47.22 494.062L86.986 341.656L176.001 397.297V488C176.001 501.25 186.751 512 200.001 512S224.001 501.25 224.001 488V384C224.001 375.719 219.735 368.031 212.719 363.641L84.72 283.641Z" })
  }
));
PersonDiggingRegular.displayName = "PersonDiggingRegular";
var PersonDigging_default = PersonDiggingRegular;
