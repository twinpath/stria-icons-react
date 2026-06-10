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
var HandHolding_exports = {};
__export(HandHolding_exports, {
  default: () => HandHolding_default
});
module.exports = __toCommonJS(HandHolding_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandHoldingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.956 365.707C575.331 386.195 565.455 405.185 548.827 417.678L448.063 493.51C432.186 505.504 412.808 512 392.805 512H24.003C10.802 512 0 501.206 0 488.013V488.013C0 474.821 10.802 464.027 24.003 464.027H392.555C402.307 464.027 411.683 460.779 419.434 455.032L520.073 379.574C530.325 371.953 531.075 357.336 520.948 348.841C513.072 342.22 500.82 342.719 492.569 348.841L431.311 394.94C423.553 400.778 414.106 403.935 404.395 403.935H269.788C262.287 403.935 256.036 397.814 256.036 390.193V390.068C256.036 382.447 262.287 376.326 269.788 376.326H329.671C359.801 376.326 358.675 336.098 330.797 336.098H186.776C168.774 336.098 151.271 341.845 137.269 352.589L96.014 384.071H24.003C10.802 384.071 0 373.277 0 360.085V360.085C0 346.892 10.802 336.098 24.003 336.098H79.761L108.14 314.36C130.268 297.37 158.272 288 186.651 288H330.672C369.302 288 399.681 317.858 399.806 355.837H403.182L463.565 310.362C482.693 295.996 520.823 285.751 551.953 312.112C567.83 325.604 576.706 345.218 575.956 365.707Z" })
  }
));
HandHoldingRegular.displayName = "HandHoldingRegular";
var HandHolding_default = HandHoldingRegular;
