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
var HoodCloak_exports = {};
__export(HoodCloak_exports, {
  default: () => HoodCloak_default
});
module.exports = __toCommonJS(HoodCloak_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HoodCloakRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M569.649 460.75C512.03 383.875 512.03 320 512.03 320V256C512.03 172 465.659 133 410.79 73.25L450.661 33.5C462.91 21.25 454.286 0 436.787 0H287.677C192.062 0 64.074 109.5 64.074 256V320C64.074 320 64.074 383.875 6.33 460.75C-9.418 481.75 6.08 512 32.327 512H543.652C570.024 512 585.398 481.875 569.649 460.75ZM368.294 464H208.31V328C208.31 283.875 244.306 248 288.302 248C332.423 248 368.294 283.875 368.294 328V464ZM416.289 464V328C416.289 257.375 358.92 200 288.302 200C217.809 200 160.315 257.375 160.315 328V464H62.574C110.57 388.25 112.07 327.375 112.07 320V256C112.07 137.25 218.559 48 287.552 48H368.294L344.296 71.875C380.793 111.625 378.793 109.375 393.542 125.125C441.162 175.75 464.035 202.625 464.035 256V320C464.035 327.375 465.534 388.25 513.53 464H416.289Z" })
  }
));
HoodCloakRegular.displayName = "HoodCloakRegular";
var HoodCloak_default = HoodCloakRegular;
