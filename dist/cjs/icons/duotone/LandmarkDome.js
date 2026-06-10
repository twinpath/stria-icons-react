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
var LandmarkDome_exports = {};
__export(LandmarkDome_exports, {
  default: () => LandmarkDome_default
});
module.exports = __toCommonJS(LandmarkDome_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LandmarkDomeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 464V496C512 504.799 504.801 512 496 512H16C7.199 512 0 504.799 0 496V464C0 455.199 7.199 448 16 448H32V416C32 398.326 46.326 384 64 384V256H128V384H224V256H288V384H384V256H448V384C465.674 384 480 398.326 480 416V448H496C504.801 448 512 455.199 512 464Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 256H464C472.75 256 480 248.75 480 240V208C480 199.25 472.75 192 464 192H445.125C431.625 111.75 368.25 48.375 288 34.875V16C288 7.25 280.75 0 272 0H240C231.25 0 224 7.25 224 16V34.875C143.75 48.375 80.375 111.75 66.875 192H48C39.25 192 32 199.25 32 208V240C32 248.75 39.25 256 48 256Z" })
    ]
  }
));
LandmarkDomeDuotone.displayName = "LandmarkDomeDuotone";
var LandmarkDome_default = LandmarkDomeDuotone;
