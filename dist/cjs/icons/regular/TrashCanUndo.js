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
var TrashCanUndo_exports = {};
__export(TrashCanUndo_exports, {
  default: () => TrashCanUndo_default
});
module.exports = __toCommonJS(TrashCanUndo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanUndoRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 80H349.625L315.625 23.25C306.984 8.826 291.406 0 274.592 0H173.408C156.594 0 141.016 8.826 132.375 23.25L98.375 80H24C10.746 80 0 90.744 0 104C0 117.254 10.746 128 24 128H32V448C32 483.346 60.654 512 96 512H352C387.346 512 416 483.346 416 448V128H424C437.254 128 448 117.254 448 104C448 90.744 437.254 80 424 80ZM171.875 50.875C172.875 49.125 174.875 48 177 48H271C273.125 48 275.125 49.125 276.125 50.875L293.625 80H154.375L171.875 50.875ZM368 448C368 456.836 360.836 464 352 464H96C87.164 464 80 456.836 80 448V128H368V448ZM201 354.75C205.438 358.281 210.719 360 216 360C223.031 360 230 356.906 234.75 351C243.031 340.656 241.344 325.531 231 317.25L204.422 296H248C270.062 296 288 313.938 288 336V376C288 389.25 298.75 400 312 400S336 389.25 336 376V336C336 287.469 296.531 248 248 248H204.422L231 226.75C241.344 218.469 243.031 203.344 234.75 193C226.438 182.688 211.375 181.031 201 189.25L121 253.25C115.312 257.812 112 264.719 112 272S115.312 286.188 121 290.75L201 354.75Z" })
  }
));
TrashCanUndoRegular.displayName = "TrashCanUndoRegular";
var TrashCanUndo_default = TrashCanUndoRegular;
