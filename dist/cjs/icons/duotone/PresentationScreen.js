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
var PresentationScreen_exports = {};
__export(PresentationScreen_exports, {
  default: () => PresentationScreen_default
});
module.exports = __toCommonJS(PresentationScreen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PresentationScreenDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 352.04H64C46.375 352.04 32 337.663 32 320.036V64.007H96V288.032H480V64.007H544V320.036C544 337.663 529.625 352.04 512 352.04Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M543.998 0H31.998C14.326 0 0 14.326 0 31.998V32.009C0 49.681 14.326 64.007 31.998 64.007H543.998C561.672 64.007 576 49.68 576 32.006V32.002C576 14.328 561.672 0 543.998 0ZM320 386.794V352.04H256V386.794L180.75 462.053C174.5 468.303 174.5 478.554 180.75 484.805L203.25 507.307C209.5 513.558 219.75 513.558 226 507.307L288 445.3L350 507.307C356.25 513.558 366.5 513.558 372.75 507.307L395.25 484.805C401.5 478.554 401.5 468.303 395.25 462.053L320 386.794Z" })
    ]
  }
));
PresentationScreenDuotone.displayName = "PresentationScreenDuotone";
var PresentationScreen_default = PresentationScreenDuotone;
