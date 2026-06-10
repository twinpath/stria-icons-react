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
var CheckToSlot_exports = {};
__export(CheckToSlot_exports, {
  default: () => CheckToSlot_default
});
module.exports = __toCommonJS(CheckToSlot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheckToSlotRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M341.125 137.188L268.594 229.469L231.625 197.781C221.594 189.188 206.438 190.312 197.781 200.375C189.156 210.438 190.312 225.594 200.375 234.219L256.375 282.219C260.75 285.969 266.281 288 272 288C272.781 288 273.562 287.969 274.344 287.875C280.875 287.25 286.844 283.969 290.875 278.813L378.875 166.813C387.063 156.406 385.25 141.313 374.813 133.125C364.438 124.969 349.312 126.781 341.125 137.188ZM96 408H480C493.254 408 504 397.254 504 384C504 370.742 493.254 360 480 360V96C480 60.652 451.346 32 416 32H160C124.654 32 96 60.652 96 96V360C82.746 360 72 370.742 72 384C72 397.254 82.746 408 96 408ZM144 96C144 87.164 151.164 80 160 80H416C424.836 80 432 87.164 432 96V360H144V96ZM524.562 288C511.312 288 500.562 298.75 500.562 312S511.312 336 524.562 336C526.469 336 528 337.531 528 339.422V424C528 428.406 524.406 432 520 432H56C51.594 432 48 428.406 48 424V339.422C48 337.531 49.531 336 51.406 336C64.656 336 75.406 325.25 75.406 312S64.656 288 51.406 288C23.062 288 0 311.062 0 339.422V424C0 454.875 25.125 480 56 480H520C550.875 480 576 454.875 576 424V339.422C576 311.062 552.938 288 524.562 288Z" })
  }
));
CheckToSlotRegular.displayName = "CheckToSlotRegular";
var CheckToSlot_default = CheckToSlotRegular;
