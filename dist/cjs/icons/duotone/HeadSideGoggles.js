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
var HeadSideGoggles_exports = {};
__export(HeadSideGoggles_exports, {
  default: () => HeadSideGoggles_default
});
module.exports = __toCommonJS(HeadSideGoggles_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideGogglesDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 64H415.76C376.857 23.547 323.096 0 266.131 0H224C146.584 0 80.01 45.969 49.639 112H231.107C243.52 83.859 271.295 64 304 64ZM509.256 275C503.324 261.688 496.842 243.621 490.084 224H308.5C275.279 224 244.66 204.766 231.27 176H32.809C32.371 181.289 32 186.602 32 192C32 246.5 55.25 298.5 96 334.875V512H320.006V448H384.006C419.381 448 448.006 419.375 448.006 384V320H480.006C490.881 320 500.881 314.5 506.756 305.375C512.756 296.375 513.631 284.875 509.256 275Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M231.107 112H16C7.164 112 0 119.164 0 128V160C0 168.836 7.164 176 16 176H231.27C244.66 204.766 275.279 224 308.5 224H416V64H304C271.295 64 243.52 83.859 231.107 112ZM496 64H448V224H496C504.875 224 512 216.875 512 208V80C512 71.125 504.875 64 496 64Z" })
    ]
  }
));
HeadSideGogglesDuotone.displayName = "HeadSideGogglesDuotone";
var HeadSideGoggles_default = HeadSideGogglesDuotone;
