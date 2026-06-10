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
var BarsProgress_exports = {};
__export(BarsProgress_exports, {
  default: () => BarsProgress_default
});
module.exports = __toCommonJS(BarsProgress_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BarsProgressDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 352H288V480H488C501.25 480 512 469.25 512 456V376C512 362.75 501.25 352 488 352ZM464 432H289V400H464V432ZM488 32H352V160H488C501.25 160 512 149.25 512 136V56C512 42.75 501.25 32 488 32ZM464 112H353V80H464V112ZM488 192H160V320H488C501.25 320 512 309.25 512 296V216C512 202.75 501.25 192 488 192ZM464 272H161V240H464V272Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 320H160V192H24C10.75 192 0 202.75 0 216V296C0 309.25 10.75 320 24 320ZM0 376V456C0 469.25 10.75 480 24 480H288V352H24C10.75 352 0 362.75 0 376ZM24 32C10.75 32 0 42.75 0 56V136C0 149.25 10.75 160 24 160H352V32H24Z" })
    ]
  }
));
BarsProgressDuotone.displayName = "BarsProgressDuotone";
var BarsProgress_default = BarsProgressDuotone;
