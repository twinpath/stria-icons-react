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
var SimCard_exports = {};
__export(SimCard_exports, {
  default: () => SimCard_default
});
module.exports = __toCommonJS(SimCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SimCardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M365.254 109.254L274.746 18.744C262.742 6.742 246.465 0 229.49 0H64C28.801 0 0 28.799 0 64V448C0 483.199 28.801 512 64 512H320C355.199 512 384 483.199 384 448V154.51C384 137.535 377.258 121.256 365.254 109.254ZM352 448C352 465.6 337.6 480 320 480H64C46.4 480 32 465.6 32 448V64C32 46.4 46.4 32 64 32H229.496C237.982 32 246.121 35.371 252.123 41.373L342.627 131.877C348.629 137.879 352 146.018 352 154.504V448ZM272 192H112C85.5 192 64 213.5 64 240V400C64 426.5 85.5 448 112 448H272C298.5 448 320 426.5 320 400V240C320 213.5 298.5 192 272 192ZM168 224H216V264H168V224ZM96 240C96 231.25 103.25 224 112 224H136V264H96V240ZM136 416H112C103.25 416 96 408.75 96 400V376H136V416ZM216 416H168V376H216V416ZM288 400C288 408.75 280.75 416 272 416H248V376H288V400ZM288 344H96V296H288V344ZM288 264H248V224H272C280.75 224 288 231.25 288 240V264Z" })
  }
));
SimCardLight.displayName = "SimCardLight";
var SimCard_default = SimCardLight;
