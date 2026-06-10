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
var FaceGrimace_exports = {};
__export(FaceGrimace_exports, {
  default: () => FaceGrimace_default
});
module.exports = __toCommonJS(FaceGrimace_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceGrimaceSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM151.98 400H143.988C126.309 400 112.02 385.75 112.02 368V360H151.98V400ZM151.98 344H112.02V336C112.02 318.25 126.309 304 143.988 304H151.98V344ZM144 208C144 190.25 158.276 176 175.94 176C193.724 176 208 190.25 208 208S193.724 240 175.94 240C158.276 240 144 225.75 144 208ZM216.039 400H167.965V360H216.039V400ZM216.039 344H167.965V304H216.039V344ZM279.977 400H232.023V360H279.977V400ZM279.977 344H232.023V304H279.977V344ZM344.035 400H295.961V360H344.035V400ZM344.035 344H295.961V304H344.035V344ZM336.06 240C318.276 240 304 225.75 304 208S318.276 176 336.06 176C353.724 176 368 190.25 368 208S353.724 240 336.06 240ZM399.98 368C399.98 385.75 385.691 400 368.012 400H360.02V360H399.98V368ZM399.98 344H360.02V304H368.012C385.691 304 399.98 318.25 399.98 336V344Z" })
  }
));
FaceGrimaceSolid.displayName = "FaceGrimaceSolid";
var FaceGrimace_default = FaceGrimaceSolid;
