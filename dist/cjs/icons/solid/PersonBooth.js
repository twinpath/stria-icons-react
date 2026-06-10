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
var PersonBooth_exports = {};
__export(PersonBooth_exports, {
  default: () => PersonBooth_default
});
module.exports = __toCommonJS(PersonBooth_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonBoothSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 496C192 504.75 199.25 512 208 512H240C248.75 512 256 504.75 256 496V320H192V496ZM544 0H512V496C512 504.75 519.25 512 528 512H560C568.75 512 576 504.75 576 496V32C576 14.25 561.75 0 544 0ZM64 128C90.5 128 112 106.5 112 80S90.5 32 64 32S16 53.5 16 80S37.5 128 64 128ZM224 224H173.125L127.875 178.75C115.75 166.625 99.75 160 82.75 160H64C46.875 160 30.75 166.75 18.75 178.75C6.75 190.875 0 207 0 224.125L0.25 320L0 480C0 497.75 14.25 512 31.875 512S63.875 497.75 63.875 480L64 379.25C64.875 379.75 65.625 380.625 66.5 381L95.625 424V480C95.625 497.75 109.875 512 127.625 512C145.25 512 159.625 497.75 159.625 480V423.5C159.625 413.625 157.25 403.75 152.875 394.875L111.75 333.625V253L132.625 273.875C141.75 283 153.75 288 166.5 288H224C241.75 288 256 273.75 256 256S241.75 224 224 224ZM192 32V192H256V0H224C206.25 0 192 14.25 192 32ZM288 32L319.5 255.125L288.625 409.75C284.25 431.25 301.625 448 320 448C335.25 448 348 438.875 352.25 417.625C353.25 434.5 366.875 448 384 448C401.75 448 416 433.75 416 416C416 433.75 430.25 448 448 448S480 433.75 480 416V0H288V32Z" })
  }
));
PersonBoothSolid.displayName = "PersonBoothSolid";
var PersonBooth_default = PersonBoothSolid;
