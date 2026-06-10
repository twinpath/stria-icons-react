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
var CircleHeart_exports = {};
__export(CircleHeart_exports, {
  default: () => CircleHeart_default
});
module.exports = __toCommonJS(CircleHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleHeartRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM361.719 170.75C331.781 145.656 287.219 146.125 256.031 170.625C224.812 146.188 180.344 145.594 150.469 170.719C132.281 185.812 121.219 208.031 120.094 231.594C118.938 255.219 127.781 278.344 144.344 295.062L229.062 380.812C236.281 388.031 245.812 392 255.969 392H256.062C266.219 391.969 275.75 387.969 282.906 380.719L367.594 295.062C384.125 278.406 393 255.344 391.906 231.781C390.844 208.188 379.844 185.938 361.719 170.75ZM333.5 261.281L255.938 339.719L178.469 261.312C171.344 254.125 167.531 244.125 168.031 233.906C168.531 223.562 173.188 214.25 181.219 207.562C187.25 202.5 194.781 200.031 202.5 200.031C212.406 200.031 222.656 204.094 230.5 212.063L256.156 237.344L281.75 211.844C295.469 197.938 317.062 196 330.906 207.562C338.844 214.219 343.5 223.594 343.969 233.969C344.438 244.312 340.719 254 333.5 261.281Z" })
  }
));
CircleHeartRegular.displayName = "CircleHeartRegular";
var CircleHeart_default = CircleHeartRegular;
