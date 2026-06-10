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
var XmarkToSlot_exports = {};
__export(XmarkToSlot_exports, {
  default: () => XmarkToSlot_default
});
module.exports = __toCommonJS(XmarkToSlot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const XmarkToSlotRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 408H480C493.254 408 504 397.254 504 384C504 370.742 493.254 360 480 360V96C480 60.652 451.346 32 416 32H160C124.654 32 96 60.652 96 96V360C82.746 360 72 370.742 72 384C72 397.254 82.746 408 96 408ZM144 96C144 87.164 151.164 80 160 80H416C424.836 80 432 87.164 432 96V360H144V96ZM524.562 288C511.312 288 500.562 298.75 500.562 312S511.312 336 524.562 336C526.469 336 528 337.531 528 339.422V424C528 428.406 524.406 432 520 432H56C51.594 432 48 428.406 48 424V339.422C48 337.531 49.531 336 51.406 336C64.656 336 75.406 325.25 75.406 312S64.656 288 51.406 288C23.062 288 0 311.062 0 339.422V424C0 454.875 25.125 480 56 480H520C550.875 480 576 454.875 576 424V339.422C576 311.062 552.938 288 524.562 288ZM368.969 135.031C359.594 125.656 344.406 125.656 335.031 135.031L288 182.062L240.969 135.031C231.594 125.656 216.406 125.656 207.031 135.031S197.656 159.594 207.031 168.969L254.062 216L207.031 263.031C197.656 272.406 197.656 287.594 207.031 296.969C216.404 306.34 231.588 306.348 240.969 296.969L288 249.938L335.031 296.969C344.404 306.34 359.588 306.348 368.969 296.969C378.344 287.594 378.344 272.406 368.969 263.031L321.938 216L368.969 168.969C378.344 159.594 378.344 144.406 368.969 135.031Z" })
  }
));
XmarkToSlotRegular.displayName = "XmarkToSlotRegular";
var XmarkToSlot_default = XmarkToSlotRegular;
