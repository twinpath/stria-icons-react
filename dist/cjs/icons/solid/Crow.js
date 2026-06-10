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
const CrowSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 32.001H527.625C513 12.626 490.125 0 464 0C419.875 0 384 35.877 384 80.003V101.004L12.125 393.642C4.5 399.267 0 408.267 0 417.768C0 440.268 23.625 454.769 43.75 444.769L165.25 384.016H261.75L306.125 504.146C308.5 510.396 315.375 513.522 321.5 511.271L344.125 503.021C350.375 500.771 353.5 493.896 351.25 487.645L313 384.016H352C353.875 384.016 355.75 383.766 357.625 383.766L402.125 504.146C404.5 510.396 411.375 513.522 417.5 511.271L440.125 503.021C446.375 500.771 449.5 493.896 447.25 487.645L406 376.141C485.75 352.765 544 279.262 544 192.008V112.005L640 96.004C640 60.628 597 32.001 544 32.001ZM464 104.004C450.75 104.004 440 93.254 440 80.003S450.75 56.002 464 56.002S488 66.753 488 80.003S477.25 104.004 464 104.004Z" })
  }
));
CrowSolid.displayName = "CrowSolid";
var Crow_default = CrowSolid;
