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
var PaperPlane_exports = {};
__export(PaperPlane_exports, {
  default: () => PaperPlane_default
});
module.exports = __toCommonJS(PaperPlane_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaperPlaneDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.623 36.863L447.623 452.86C446.123 462.594 440.248 471.078 431.655 475.907C426.811 478.625 421.405 480 415.998 480C411.811 480 407.655 479.188 403.686 477.532L281.045 426.432L191.998 512V394.98C191.998 387.864 194.371 380.952 198.741 375.335L415.998 96.004L122.332 360.302L19.686 317.533C8.436 312.845 0.811 302.158 0.061 289.986S5.53 266.268 16.123 260.221L464.123 4.223C474.811 -1.886 487.998 -1.324 498.123 5.629S513.498 24.723 511.623 36.863Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M415.666 96.004L198.408 375.335C194.039 380.952 191.666 387.864 191.666 394.98V512L122 360.302L415.666 96.004Z" })
    ]
  }
));
PaperPlaneDuotone.displayName = "PaperPlaneDuotone";
var PaperPlane_default = PaperPlaneDuotone;
