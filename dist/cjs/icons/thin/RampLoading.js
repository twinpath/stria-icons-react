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
var RampLoading_exports = {};
__export(RampLoading_exports, {
  default: () => RampLoading_default
});
module.exports = __toCommonJS(RampLoading_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RampLoadingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M344 0H40C17.938 0 0 17.938 0 40V344.75C0 364.875 15.375 381.719 35.75 383.938C40.031 384.844 44.078 381.25 44.578 376.875C45.062 372.469 41.891 368.531 37.5 368.063C25.234 366.719 16 356.688 16 344.75V40C16 26.766 26.766 16 40 16H344C357.234 16 368 26.766 368 40V344.75C368 356.688 358.766 366.719 346.5 368.062C342.109 368.531 338.938 372.469 339.422 376.875C339.875 380.969 343.344 384 347.359 384C347.656 384 347.953 384 348.25 383.938C368.625 381.719 384 364.875 384 344.75V40C384 17.938 366.062 0 344 0ZM273.016 308.406C271.656 305.719 268.891 304 265.859 304H118.141C115.109 304 112.344 305.719 110.984 308.406L26.547 477.281C22.797 484.781 23.203 493.5 27.609 500.625S39.641 512 48.016 512H335.984C344.359 512 351.984 507.75 356.391 500.625S361.203 484.781 357.453 477.25L273.016 308.406ZM342.781 492.219C342.078 493.344 340.016 496 335.984 496H48.016C43.984 496 41.922 493.344 41.219 492.219C40.516 491.062 39.063 488.031 40.859 484.437L123.078 320H260.922L343.141 484.406C344.938 488.031 343.484 491.062 342.781 492.219Z" })
  }
));
RampLoadingThin.displayName = "RampLoadingThin";
var RampLoading_default = RampLoadingThin;
