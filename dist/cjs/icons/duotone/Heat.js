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
var Heat_exports = {};
__export(Heat_exports, {
  default: () => Heat_default
});
module.exports = __toCommonJS(Heat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeatDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M248.161 256.339C284.492 296.152 304 348.498 304 402.396V441.145C304 465.843 289.673 480 272 480H272C254.327 480 240 465.673 240 448L240 402.375C240 364.174 226.001 327.253 200.405 298.895C164.09 258.659 144 206.453 144 152.25V64C144 46.327 158.327 32 176 32H176C193.673 32 208 46.327 208 64V152.25C207.874 190.766 222.197 227.887 248.161 256.339Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M104.161 256.339C140.492 296.152 160 348.498 160 402.396L160 441.145C160 465.843 145.673 480 128 480H128C110.327 480 96 465.673 96 448L96 402.375C96 364.174 82.001 327.253 56.405 298.895C20.09 258.659 0 206.453 0 152.25V128C0 110.327 14.327 96 32 96H32C49.673 96 64 110.327 64 128V152.25C63.874 190.766 78.197 227.887 104.161 256.339ZM391.687 255.82C366.06 227.43 352 190.496 352 152.25L352 128C352 110.327 337.673 96 320 96H320C302.327 96 288 110.327 288 128L288 152.25C288 206.111 307.493 258.391 343.775 298.199C369.732 326.679 384.126 363.89 384 402.375V448C384 465.673 398.327 480 416 480H416C433.673 480 448 465.673 448 448V402.375C448 348.281 427.898 295.935 391.687 255.82Z" })
    ]
  }
));
HeatDuotone.displayName = "HeatDuotone";
var Heat_default = HeatDuotone;
