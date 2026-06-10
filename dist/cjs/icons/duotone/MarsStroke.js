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
var MarsStroke_exports = {};
__export(MarsStroke_exports, {
  default: () => MarsStroke_default
});
module.exports = __toCommonJS(MarsStroke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsStrokeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 304C272 339.346 243.346 368 208 368S144 339.346 144 304S172.654 240 208 240S272 268.654 272 304Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 0H383.631C362.249 0 351.542 25.852 366.661 40.971L396.217 70.528L371.883 94.864L337.942 60.922C331.694 54.672 321.563 54.674 315.315 60.922L292.688 83.549C286.438 89.799 286.438 99.926 292.688 106.176L326.629 140.117L307.67 159.076C239.102 111.817 144.543 118.555 83.549 179.549C14.817 248.281 14.817 359.717 83.549 428.451C152.282 497.182 263.719 497.184 332.452 428.451C393.446 367.457 400.184 272.897 352.924 204.33L371.883 185.371L405.825 219.313C412.073 225.561 422.204 225.563 428.452 219.313L451.079 196.686C457.327 190.438 457.327 180.307 451.079 174.059L417.137 140.117L441.473 115.783L471.03 145.34C486.149 160.459 512 149.75 512 128.369V16C512 7.162 504.836 0 496 0ZM275.883 371.881C238.452 409.313 177.549 409.311 140.12 371.881C102.688 334.451 102.688 273.549 140.12 236.117C177.549 198.688 238.452 198.686 275.883 236.117C313.313 273.547 313.313 334.451 275.883 371.881Z" })
    ]
  }
));
MarsStrokeDuotone.displayName = "MarsStrokeDuotone";
var MarsStroke_default = MarsStrokeDuotone;
