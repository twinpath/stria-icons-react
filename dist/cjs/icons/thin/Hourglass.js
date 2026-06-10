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
var Hourglass_exports = {};
__export(Hourglass_exports, {
  default: () => Hourglass_default
});
module.exports = __toCommonJS(Hourglass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HourglassThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 435.25V456C32 460.406 35.578 464 40 464S48 460.406 48 456V435.25C48 406.781 57.562 378.938 74.938 356.844L150.281 261.062C152.578 258.156 152.578 254.094 150.281 251.187L74.938 155.438C57.562 133.344 48 105.469 48 77V56C48 51.594 44.422 48 40 48S32 51.594 32 56V77C32 109.062 42.781 140.406 62.375 165.312L133.828 256.125L62.375 346.969C42.781 371.875 32 403.219 32 435.25ZM352 77V56C352 51.594 348.422 48 344 48S336 51.594 336 56V77C336 105.469 326.438 133.344 309.062 155.438L233.719 251.188C231.422 254.094 231.422 258.156 233.719 261.063L309.062 356.844C326.438 378.938 336 406.781 336 435.25V456C336 460.406 339.578 464 344 464S352 460.406 352 456V435.25C352 403.219 341.219 371.875 321.625 346.969L250.172 256.125L321.625 165.312C341.219 140.406 352 109.062 352 77ZM8 16H376C380.422 16 384 12.406 384 8S380.422 0 376 0H8C3.578 0 0 3.594 0 8S3.578 16 8 16ZM376 496H8C3.578 496 0 499.594 0 504S3.578 512 8 512H376C380.422 512 384 508.406 384 504S380.422 496 376 496ZM192 234.656C194.516 234.656 196.891 233.469 198.406 231.469L272.406 132.812C274.219 130.375 274.516 127.125 273.156 124.437C271.797 121.719 269.031 120 265.999 120H117.999C114.969 120 112.203 121.719 110.844 124.438C109.484 127.125 109.781 130.375 111.594 132.812L185.594 231.469C187.109 233.469 189.484 234.656 192 234.656ZM249.999 136L192 213.312L133.999 136H249.999ZM96 464H288C292.422 464 296 460.406 296 456V434.656C296 419.219 290.891 403.875 281.594 391.438L272.391 379.188C270.891 377.188 268.516 376 265.999 376H117.999C115.484 376 113.109 377.188 111.609 379.188L102.391 391.469C93.109 403.875 88 419.219 88 434.656V456C88 460.406 91.578 464 96 464ZM104 434.656C104 422.625 107.984 410.688 115.188 401.062L121.999 392H261.999L268.797 401.031C276.016 410.688 280 422.625 280 434.656V448H104V434.656Z" })
  }
));
HourglassThin.displayName = "HourglassThin";
var Hourglass_default = HourglassThin;
