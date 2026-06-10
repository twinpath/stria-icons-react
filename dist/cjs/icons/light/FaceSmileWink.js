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
var FaceSmileWink_exports = {};
__export(FaceSmileWink_exports, {
  default: () => FaceSmileWink_default
});
module.exports = __toCommonJS(FaceSmileWink_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceSmileWinkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M346.215 325.75C323.812 352.625 290.875 368 256 368S188.188 352.625 165.785 325.75C152.344 309.625 127.641 330 141.203 346.25C169.66 380.375 211.559 400 256 400S342.34 380.375 370.797 346.25C384.359 330 359.656 309.5 346.215 325.75ZM175.955 232C189.293 232 200 221.312 200 208S189.293 184 175.955 184C162.707 184 152 194.688 152 208S162.707 232 175.955 232ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM336 176C308.906 176 284.656 193.141 275.625 218.672C272.687 227 277.062 236.141 285.375 239.078C293.781 242.031 302.844 237.703 305.812 229.328C310.312 216.578 322.438 208 336 208S361.688 216.578 366.188 229.328C368.531 235.906 374.688 240 381.281 240C383.063 240 384.844 239.703 386.625 239.078C394.938 236.141 399.313 227 396.375 218.672C387.344 193.141 363.094 176 336 176Z" })
  }
));
FaceSmileWinkLight.displayName = "FaceSmileWinkLight";
var FaceSmileWink_default = FaceSmileWinkLight;
