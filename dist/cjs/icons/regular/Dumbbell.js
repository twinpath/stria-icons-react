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
var Dumbbell_exports = {};
__export(Dumbbell_exports, {
  default: () => Dumbbell_default
});
module.exports = __toCommonJS(Dumbbell_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DumbbellRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 224H608V152C608 121.072 582.928 96 552 96H520C517.25 96 514.625 96.375 512 96.75V88C512 57.072 486.928 32 456 32H424C393.072 32 368 57.072 368 88V224H272V88C272 57.072 246.928 32 216 32H184C153.072 32 128 57.072 128 88V96.75C125.375 96.375 122.75 96 120 96H88C57.072 96 32 121.072 32 152V224H32C14.4 224 0 238.4 0 256V256C0 273.6 14.4 288 32 288H32V360C32 390.928 57.072 416 88 416H120C122.75 416 125.375 415.625 128 415.25V424C128 454.928 153.072 480 184 480H216C246.928 480 272 454.928 272 424V288H368V424C368 454.928 393.072 480 424 480H456C486.928 480 512 454.928 512 424V415.25C514.625 415.625 517.25 416 520 416H552C582.928 416 608 390.928 608 360V288H608C625.6 288 640 273.6 640 256V256C640 238.4 625.6 224 608 224ZM120 368H88C83.625 368 80 364.375 80 360V152C80 147.625 83.625 144 88 144H120C124.375 144 128 147.625 128 152V360C128 364.375 124.375 368 120 368ZM224 424C224 428.375 220.375 432 216 432H184C179.625 432 176 428.375 176 424V88C176 83.625 179.625 80 184 80H216C220.375 80 224 83.625 224 88V424ZM464 424C464 428.375 460.375 432 456 432H424C419.625 432 416 428.375 416 424V88C416 83.625 419.625 80 424 80H456C460.375 80 464 83.625 464 88V424ZM560 360C560 364.375 556.375 368 552 368H520C515.625 368 512 364.375 512 360V152C512 147.625 515.625 144 520 144H552C556.375 144 560 147.625 560 152V360Z" })
  }
));
DumbbellRegular.displayName = "DumbbellRegular";
var Dumbbell_default = DumbbellRegular;
