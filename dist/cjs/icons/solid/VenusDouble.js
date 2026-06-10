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
var VenusDouble_exports = {};
__export(VenusDouble_exports, {
  default: () => VenusDouble_default
});
module.exports = __toCommonJS(VenusDouble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VenusDoubleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 176C368 78.797 289.203 0 192 0C94.799 0 16 78.797 16 176C16 262.258 78.1 333.887 160 348.953V384H112C103.164 384 96 391.162 96 400V432C96 440.836 103.164 448 112 448H160V496C160 504.836 167.164 512 176 512H208C216.838 512 224 504.836 224 496V448H272C280.838 448 288 440.836 288 432V400C288 391.162 280.838 384 272 384H224V348.953C305.902 333.887 368 262.258 368 176ZM192 272C139.066 272 96 228.934 96 176C96 123.064 139.066 80 192 80C244.936 80 288 123.064 288 176C288 228.934 244.936 272 192 272ZM624 176C624 78.797 545.203 0 448 0C408.982 0 373.055 12.854 343.873 34.34C362.258 54.037 376.812 77.254 386.49 102.916C403.201 88.828 424.484 80 448 80C500.936 80 544 123.064 544 176C544 228.934 500.936 272 448 272C424.426 272 403.092 263.131 386.365 248.98C376.793 274.434 362.42 297.516 344.133 317.211C365.141 332.66 389.334 344.047 416 348.953V384H368C359.164 384 352 391.162 352 400V432C352 440.836 359.164 448 368 448H416V496C416 504.836 423.164 512 432 512H464C472.838 512 480 504.836 480 496V448H528C536.838 448 544 440.836 544 432V400C544 391.162 536.838 384 528 384H480V348.953C561.902 333.887 624 262.258 624 176Z" })
  }
));
VenusDoubleSolid.displayName = "VenusDoubleSolid";
var VenusDouble_default = VenusDoubleSolid;
