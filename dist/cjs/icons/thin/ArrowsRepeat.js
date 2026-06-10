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
var ArrowsRepeat_exports = {};
__export(ArrowsRepeat_exports, {
  default: () => ArrowsRepeat_default
});
module.exports = __toCommonJS(ArrowsRepeat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsRepeatThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M419.428 103.997L338.594 178.091C335.344 181.091 335.109 186.154 338.109 189.404C339.688 191.123 341.844 191.998 344 191.998C345.938 191.998 347.875 191.31 349.406 189.904L445.406 101.903C447.062 100.372 448 98.247 448 95.997S447.062 91.622 445.406 90.091L349.406 2.09C346.188 -0.879 341.125 -0.66 338.109 2.59C335.109 5.84 335.344 10.902 338.594 13.902L419.428 87.997H168C75.359 87.997 0 163.372 0 255.998C0 260.404 3.578 263.998 8 263.998S16 260.404 16 255.998C16 172.185 84.188 103.997 168 103.997H419.428ZM504 247.998C499.578 247.998 496 251.592 496 255.998C496 339.811 427.812 407.999 344 407.999H92.572L173.406 333.905C176.656 330.905 176.891 325.842 173.891 322.592C170.906 319.342 165.844 319.124 162.594 322.092L66.594 410.093C64.938 411.624 64 413.749 64 415.999C64 418.249 64.938 420.374 66.594 421.906L162.594 509.906C164.125 511.312 166.062 512 168 512C170.156 512 172.312 511.125 173.891 509.406C176.891 506.156 176.656 501.094 173.406 498.094L92.572 423.999H344C436.641 423.999 512 348.624 512 255.998C512 251.592 508.422 247.998 504 247.998Z" })
  }
));
ArrowsRepeatThin.displayName = "ArrowsRepeatThin";
var ArrowsRepeat_default = ArrowsRepeatThin;
