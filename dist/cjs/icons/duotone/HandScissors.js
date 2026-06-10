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
var HandScissors_exports = {};
__export(HandScissors_exports, {
  default: () => HandScissors_default
});
module.exports = __toCommonJS(HandScissors_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandScissorsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.752 181.475C507.732 150.398 492.398 121.34 467.203 102.432L428.797 73.637C420.484 67.404 410.391 64.045 400 64.045H352C337.422 64.045 323.625 70.67 314.516 82.059L300.23 99.91L372.766 122.578C379.612 124.708 384 131.026 384 137.833C384 139.414 383.763 141.022 383.266 142.609C381.125 149.469 374.812 153.844 368 153.844C366.422 153.844 364.812 153.609 363.234 153.109L84 65.889C79.979 64.608 75.909 63.999 71.909 63.999C54.922 63.999 39.193 74.971 33.844 92.041C32.589 96.032 31.992 100.073 31.992 104.046C31.992 121.053 42.926 136.823 60 142.191L269.502 208.027H40C17.906 208.027 0 225.932 0 248.023S17.906 288.018 40 288.018H229.52C216.561 296.611 208 311.297 208 328.014C208 351.492 224.869 370.951 247.139 375.115C242.697 382.393 240 390.854 240 400.006C240 426.518 261.484 448 288 448H368C447.406 448 512 383.414 512 304.016V192.029C512 188.391 511.518 184.881 510.752 181.475Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
HandScissorsDuotone.displayName = "HandScissorsDuotone";
var HandScissors_default = HandScissorsDuotone;
