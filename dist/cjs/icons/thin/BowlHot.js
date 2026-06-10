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
var BowlHot_exports = {};
__export(BowlHot_exports, {
  default: () => BowlHot_default
});
module.exports = __toCommonJS(BowlHot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BowlHotThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296.203 91.719L304.641 95.937C323.984 105.594 336 125.031 336 146.672V152C336 156.422 339.578 160 344 160S352 156.422 352 152V146.672C352 118.938 336.594 94 311.797 81.625L303.359 77.406C284.016 67.734 272 48.297 272 26.672V8C272 3.578 268.422 0 264 0S256 3.578 256 8V26.672C256 54.391 271.406 79.312 296.203 91.719ZM168.203 91.719L176.641 95.937C195.984 105.594 208 125.031 208 146.672V152C208 156.422 211.578 160 216 160S224 156.422 224 152V146.672C224 118.938 208.594 94 183.797 81.625L175.359 77.406C156.016 67.734 144 48.297 144 26.672V8C144 3.578 140.422 0 136 0S128 3.578 128 8V26.672C128 54.391 143.406 79.312 168.203 91.719ZM480 192.002H32C14.375 192.002 0 206.375 0 224C0 318.75 51.5 401.125 128 445.5V480C128 497.625 142.375 512 160 512H352C369.625 512 384 497.625 384 480V445.5C460.5 401.125 512 318.75 512 224C512 206.375 497.625 192.002 480 192.002ZM375.973 431.66L368 436.285V480C368 488.822 360.822 496 352 496H160C151.178 496 144 488.822 144 480V436.285L136.029 431.66C61.992 388.715 16 309.145 16 224C16 215.178 23.178 208.002 32 208.002H480C488.822 208.002 496 215.178 496 224C496 309.145 450.008 388.715 375.973 431.66Z" })
  }
));
BowlHotThin.displayName = "BowlHotThin";
var BowlHot_default = BowlHotThin;
