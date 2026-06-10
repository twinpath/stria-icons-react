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
var CloudWord_exports = {};
__export(CloudWord_exports, {
  default: () => CloudWord_default
});
module.exports = __toCommonJS(CloudWord_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudWordDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M537.594 226.594C541.688 215.906 544 204.203 544 192C544 139 501 96 448 96C428.312 96 409.906 102 394.688 112.203C367 64.203 315.312 32 256 32C167.594 32 96 103.594 96 192C96 194.703 96.094 197.406 96.188 200.094C40.188 219.797 0 273.203 0 336C0 415.5 64.5 480 144 480H512C582.688 480 640 422.703 640 352C640 290.094 596 238.406 537.594 226.594ZM128 304C128 295.162 135.164 288 144 288H272C280.836 288 288 295.162 288 304C288 312.836 280.836 320 272 320H144C135.164 320 128 312.836 128 304ZM208 384H176C167.164 384 160 376.836 160 368C160 359.162 167.164 352 176 352H208C216.836 352 224 359.162 224 368C224 376.836 216.836 384 208 384ZM368 384H272C263.164 384 256 376.836 256 368C256 359.162 263.164 352 272 352H368C376.836 352 384 359.162 384 368C384 376.836 376.836 384 368 384ZM464 384H432C423.164 384 416 376.836 416 368C416 359.162 423.164 352 432 352H464C472.836 352 480 359.162 480 368C480 376.836 472.836 384 464 384ZM496 319.998H336C327.164 319.998 320 312.836 320 303.998C320 295.162 327.164 287.998 336 287.998H496C504.836 287.998 512 295.162 512 303.998C512 312.836 504.836 319.998 496 319.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 304C128 295.162 135.164 288 144 288H272C280.836 288 288 295.162 288 304C288 312.836 280.836 320 272 320H144C135.164 320 128 312.836 128 304ZM208 384H176C167.164 384 160 376.836 160 368C160 359.162 167.164 352 176 352H208C216.836 352 224 359.162 224 368C224 376.836 216.836 384 208 384ZM368 384H272C263.164 384 256 376.836 256 368C256 359.162 263.164 352 272 352H368C376.836 352 384 359.162 384 368C384 376.836 376.836 384 368 384ZM464 384H432C423.164 384 416 376.836 416 368C416 359.162 423.164 352 432 352H464C472.836 352 480 359.162 480 368C480 376.836 472.836 384 464 384ZM496 319.998H336C327.164 319.998 320 312.836 320 303.998C320 295.162 327.164 287.998 336 287.998H496C504.836 287.998 512 295.162 512 303.998C512 312.836 504.836 319.998 496 319.998Z" })
    ]
  }
));
CloudWordDuotone.displayName = "CloudWordDuotone";
var CloudWord_default = CloudWordDuotone;
