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
var BoxCircleCheck_exports = {};
__export(BoxCircleCheck_exports, {
  default: () => BoxCircleCheck_default
});
module.exports = __toCommonJS(BoxCircleCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxCircleCheckRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM499.312 341.984L424.656 416.641C421.531 419.766 417.438 421.328 413.344 421.328S405.156 419.766 402.031 416.641L364.688 379.312C358.438 373.062 358.438 362.937 364.688 356.688S381.063 350.438 387.312 356.688L413.344 382.703L476.688 319.359C482.938 313.109 493.063 313.109 499.312 319.359S505.562 335.734 499.312 341.984ZM64 432C55.178 432 48 424.822 48 416V206.672H361.746C383.277 197.281 407.01 192 432 192C437.402 192 442.723 192.33 448 192.807V176.764C448 165.773 445.17 154.967 439.781 145.387L394.352 64.623C383.016 44.471 361.691 32 338.57 32H109.43C86.309 32 64.984 44.471 53.648 64.623L8.219 145.387C2.83 154.967 0 165.773 0 176.764V416C0 451.346 28.654 480 64 480H296.234C284.455 465.736 275.031 449.516 268.182 432H64ZM247.016 80H338.57C344.342 80 349.686 83.125 352.516 88.154L392.182 158.672H247.016V80ZM95.484 88.154C98.314 83.125 103.658 80 109.43 80H199.016V158.672H55.818L95.484 88.154Z" })
  }
));
BoxCircleCheckRegular.displayName = "BoxCircleCheckRegular";
var BoxCircleCheck_default = BoxCircleCheckRegular;
