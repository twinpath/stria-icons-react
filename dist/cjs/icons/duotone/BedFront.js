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
var BedFront_exports = {};
__export(BedFront_exports, {
  default: () => BedFront_default
});
module.exports = __toCommonJS(BedFront_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedFrontDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 288V352H0V288C0 252.625 28.625 224 64 224H448C483.375 224 512 252.625 512 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 352V464C0 472.875 7.125 480 16 480H48C56.875 480 64 472.875 64 464V416H448V464C448 472.875 455.125 480 464 480H496C504.875 480 512 472.875 512 464V352H0ZM80 224V160C80 142.375 94.375 128 112 128H208C225.625 128 240 142.375 240 160V224H272V160C272 142.375 286.375 128 304 128H400C417.625 128 432 142.375 432 160V224H448C459.723 224 470.557 227.373 480 232.863V64C480 46.375 465.625 32 448 32H64C46.375 32 32 46.375 32 64V232.863C41.443 227.373 52.277 224 64 224H80Z" })
    ]
  }
));
BedFrontDuotone.displayName = "BedFrontDuotone";
var BedFront_default = BedFrontDuotone;
