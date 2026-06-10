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
var TruckMoving_exports = {};
__export(TruckMoving_exports, {
  default: () => TruckMoving_default
});
module.exports = __toCommonJS(TruckMoving_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckMovingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M621.262 237.262L562.75 178.75C550.824 166.824 534.65 160.125 517.785 160.125H480V96C480 60.652 451.346 32 416 32H64C28.654 32 0 60.652 0 96V395.611C0 436.422 28.613 473.803 69.057 479.26C99.758 483.4 127.373 469.795 144 447.625C160.771 470.129 188.719 483.592 219.738 479.158C252.176 474.52 278.818 448.504 286.096 416.555C288.85 404.469 288.324 394.234 286.375 384H449.625C449 386.92 448.566 389.842 448.307 392.807C444.752 433.238 473.83 471.973 513.842 478.789C564.365 487.398 608 448.887 608 400C608 394.5 607.375 389.25 606.375 384H624C632.75 384 640 376.75 640 368V282.5C640 265.531 633.26 249.26 621.262 237.262ZM80 432C62.375 432 48 417.625 48 400S62.375 368 80 368S112 382.375 112 400S97.625 432 80 432ZM208 432C190.375 432 176 417.625 176 400S190.375 368 208 368S240 382.375 240 400S225.625 432 208 432ZM528 432C510.375 432 496 417.625 496 400S510.375 368 528 368S560 382.375 560 400S545.625 432 528 432ZM480 256V208H517.5C521.75 208 525.75 209.75 528.75 212.75L572.125 256H480Z" })
  }
));
TruckMovingSolid.displayName = "TruckMovingSolid";
var TruckMoving_default = TruckMovingSolid;
