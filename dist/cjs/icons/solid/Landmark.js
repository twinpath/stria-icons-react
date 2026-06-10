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
var Landmark_exports = {};
__export(Landmark_exports, {
  default: () => Landmark_default
});
module.exports = __toCommonJS(Landmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LandmarkSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 448H480V416C480 398.326 465.674 384 448 384V192H384V384H288V192H224V384H128V192H64V384C46.326 384 32 398.326 32 416V448H16C7.199 448 0 455.199 0 464V496C0 504.799 7.199 512 16 512H496C504.801 512 512 504.799 512 496V464C512 455.199 504.801 448 496 448ZM501.625 92.125L267.25 2.062C264.25 0.906 259.219 0 256 0C252.812 0 247.781 0.906 244.781 2.062L10.375 92.125C4.656 94.25 0 100.969 0 107.094V144C0 152.844 7.156 160 16 160H496C504.844 160 512 152.844 512 144V107.094C512 100.406 507.875 94.438 501.625 92.125Z" })
  }
));
LandmarkSolid.displayName = "LandmarkSolid";
var Landmark_default = LandmarkSolid;
