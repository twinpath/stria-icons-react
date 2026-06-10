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
var BriefcaseClock_exports = {};
__export(BriefcaseClock_exports, {
  default: () => BriefcaseClock_default
});
module.exports = __toCommonJS(BriefcaseClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BriefcaseClockDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 224C416.375 224 352 288.375 352 368S416.375 512 496 512S640 447.625 640 368S575.625 224 496 224ZM544 384H489.75C484.375 384 480 379.625 480 374.25V304C480 295.162 487.164 288 496 288C504.838 288 512 295.162 512 304V352H544C552.838 352 560 359.162 560 368C560 376.836 552.838 384 544 384ZM320.975 352H208C199.156 352 192 344.844 192 336V288H0V432C0 457.594 22.406 480 48 480H360.234C335.102 449.568 320 410.549 320 368C320 362.582 320.488 357.289 320.975 352Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 352H512V304C512 295.162 504.838 288 496 288C487.164 288 480 295.162 480 304V374.25C480 379.625 484.375 384 489.75 384H544C552.838 384 560 376.836 560 368C560 359.162 552.838 352 544 352ZM512 192.807V144C512 118.406 489.594 96 464 96H384V48C384 22.406 361.594 0 336 0H176C150.406 0 128 22.406 128 48V96H48C22.406 96 0 118.406 0 144V288H339.367C368.514 231.055 427.637 192 496 192C501.402 192 506.723 192.33 512 192.807ZM336 96H176V48H336V96Z" })
    ]
  }
));
BriefcaseClockDuotone.displayName = "BriefcaseClockDuotone";
var BriefcaseClock_default = BriefcaseClockDuotone;
