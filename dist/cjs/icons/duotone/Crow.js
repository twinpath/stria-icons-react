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
var Crow_exports = {};
__export(Crow_exports, {
  default: () => Crow_default
});
module.exports = __toCommonJS(Crow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrowDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640.25 96.004C640.25 60.628 597.25 32.001 544.25 32.001H527.889C538.018 45.404 544.25 61.909 544.25 80.003V112.005L640.25 96.004ZM313.25 384.016H262L306.375 504.146C308.75 510.396 315.625 513.522 321.75 511.271L344.375 503.021C350.625 500.771 353.75 493.896 351.5 487.645L313.25 384.016ZM406.264 376.176C389.115 381.2 371.021 384.016 352.25 384.016C354.125 384.016 356 383.766 357.875 383.766L402.375 504.146C404.75 510.396 411.625 513.522 417.75 511.271L440.375 503.021C446.625 500.771 449.75 493.896 447.5 487.645L406.264 376.176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 0C419.816 0 384 35.818 384 80.003V101.004L12.125 393.642C4.5 399.267 0 408.267 0 417.768C0 440.268 23.625 454.769 43.75 444.769L165.25 384.016H352C458.039 384.016 544 298.052 544 192.008V80.003C544 35.818 508.184 0 464 0ZM464 56.002C477.25 56.002 488 66.753 488 80.003S477.25 104.004 464 104.004S440 93.254 440 80.003S450.75 56.002 464 56.002Z" })
    ]
  }
));
CrowDuotone.displayName = "CrowDuotone";
var Crow_default = CrowDuotone;
