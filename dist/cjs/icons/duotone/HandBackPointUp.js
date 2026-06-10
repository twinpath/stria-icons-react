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
var HandBackPointUp_exports = {};
__export(HandBackPointUp_exports, {
  default: () => HandBackPointUp_default
});
module.exports = __toCommonJS(HandBackPointUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandBackPointUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 240C374.852 240 366.385 242.697 359.107 247.143C354.941 224.869 335.467 208 312 208C294.621 208 279.535 217.33 271.111 231.168C266.955 208.883 247.477 192 224 192C211.652 192 200.506 196.797 192 204.459V40C192 17.906 174.094 0 152 0S112 17.906 112 40V264.916L111.988 264.926V335.994C111.988 344.83 104.824 351.994 95.988 351.994C87.15 351.994 79.988 344.83 79.988 335.994V290.525L50 314.516C38.625 323.625 32 337.422 32 352V400C32 410.375 35.375 420.484 41.594 428.797L60.781 454.391C87.844 490.469 130.906 512 176 512H288C291.318 512 294.557 511.662 297.686 511.021C372.506 505.936 432 444.09 432 368V288C432 261.484 410.5 240 384 240Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
HandBackPointUpDuotone.displayName = "HandBackPointUpDuotone";
var HandBackPointUp_default = HandBackPointUpDuotone;
