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
var WifiFair_exports = {};
__export(WifiFair_exports, {
  default: () => WifiFair_default
});
module.exports = __toCommonJS(WifiFair_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WifiFairRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.003 368C289.075 368 264.003 393.07 264.003 424S289.075 480 320.003 480S376.003 454.93 376.003 424S350.931 368 320.003 368ZM520.626 286.688C467.876 235.938 396.628 208 320.003 208S172.13 235.938 119.38 286.688C109.818 295.906 109.505 311.094 118.692 320.625C127.911 330.25 143.099 330.469 152.63 321.312C196.411 279.188 255.847 256 320.003 256S443.595 279.188 487.376 321.312C492.032 325.781 498.001 328 504.001 328C510.282 328 516.595 325.531 521.314 320.625C530.501 311.094 530.189 295.906 520.626 286.688Z" })
  }
));
WifiFairRegular.displayName = "WifiFairRegular";
var WifiFair_default = WifiFairRegular;
