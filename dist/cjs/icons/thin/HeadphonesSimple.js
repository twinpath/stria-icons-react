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
var HeadphonesSimple_exports = {};
__export(HeadphonesSimple_exports, {
  default: () => HeadphonesSimple_default
});
module.exports = __toCommonJS(HeadphonesSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadphonesSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383.986 256C357.52 256 335.986 277.562 335.986 304.062V431.938C335.986 458.438 357.52 480 383.986 480C428.098 480 463.986 444.055 463.986 399.875V336.125C463.986 291.945 428.098 256 383.986 256ZM447.986 399.875C447.986 435.297 419.33 464 383.986 464C366.33 464 351.986 449.641 351.986 431.938V304.062C351.986 286.344 366.33 272 383.986 272C419.33 272 447.986 300.703 447.986 336.125V399.875ZM256 32C117.219 32 4.781 144.328 0 288V376C0 380.422 3.594 384 8 384S16 380.422 16 376V288.266C20.469 153.531 125.906 48 256 48C386.062 48 491.5 153.531 496 288V376C496 380.422 499.594 384 504 384S512 380.422 512 376V287.734C507.188 144.328 394.75 32 256 32ZM127.986 256C83.875 256 47.986 291.945 47.986 336.125V399.875C47.986 444.055 83.875 480 127.986 480C154.453 480 175.986 458.437 175.986 431.937V304.062C175.986 277.562 154.453 256 127.986 256ZM159.986 431.938C159.986 449.641 145.643 464 127.986 464C92.643 464 63.986 435.297 63.986 399.875V336.125C63.986 300.703 92.643 272 127.986 272C145.643 272 159.986 286.344 159.986 304.063V431.938Z" })
  }
));
HeadphonesSimpleThin.displayName = "HeadphonesSimpleThin";
var HeadphonesSimple_default = HeadphonesSimpleThin;
