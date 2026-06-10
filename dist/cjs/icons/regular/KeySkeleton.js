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
var KeySkeleton_exports = {};
__export(KeySkeleton_exports, {
  default: () => KeySkeleton_default
});
module.exports = __toCommonJS(KeySkeleton_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KeySkeletonRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 0H320C266.98 0 224 42.98 224 96V192C224 209.773 229.16 226.209 237.578 240.484L7.031 471.031C-2.344 480.406 -2.344 495.594 7.031 504.969C11.719 509.656 17.844 512 24 512S36.281 509.656 40.969 504.969L83.719 462.219L121.781 500.281C129.562 508.094 139.812 511.969 150.062 511.969S170.562 508.094 178.344 500.281L227.781 450.844C243.375 435.25 243.375 409.875 227.781 394.281L189.719 356.219L271.516 274.422C285.791 282.84 302.227 288 320 288H416C469.02 288 512 245.02 512 192V96C512 42.98 469.02 0 416 0ZM150.062 460.688L117.656 428.281L155.781 390.156L188.187 422.563L150.062 460.688ZM464 192C464 218.467 442.467 240 416 240H320C293.533 240 272 218.467 272 192V96C272 69.533 293.533 48 320 48H416C442.467 48 464 69.533 464 96V192Z" })
  }
));
KeySkeletonRegular.displayName = "KeySkeletonRegular";
var KeySkeleton_default = KeySkeletonRegular;
